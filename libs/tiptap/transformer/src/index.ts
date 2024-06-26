/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import express from 'express';
import 'global-jsdom/register';
import cluster from 'cluster';
import os from 'os';
import createServer from './server';
import { AggregatorRegistry } from 'prom-client';

const metricsServer = express();
const aggregatorRegistry = new AggregatorRegistry();

const numCPUs = os.cpus().length;
const desiredInstances = process.env.NB_THREADS
  ? parseInt(process.env.NB_THREADS)
  : numCPUs;
const metricsPort = process.env.METRICS_PORT || 3001;

if (cluster.isPrimary && desiredInstances > 1) {
  console.log(`Launching ${desiredInstances} instances of the transformer`);
  // Fork workers for each CPU core
  for (let i = 0; i < desiredInstances; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker: any, _code: number, _signal: any) => {
    console.log(`Worker ${worker.process.pid} died`);
  });

  metricsServer.get('/metrics', async (_req, res) => {
    try {
      const metrics = await aggregatorRegistry.clusterMetrics();
      res.set('Content-Type', aggregatorRegistry.contentType);
      res.send(metrics);
    } catch (e) {
      console.error(e);
      res.statusCode = 500;
      res.send('metrics.not.available');
    }
  });
  metricsServer.listen(metricsPort);
  console.log(
    `Cluster metrics server listening to ${metricsPort}, metrics exposed on /metrics`
  );
} else {
  createServer();
}
