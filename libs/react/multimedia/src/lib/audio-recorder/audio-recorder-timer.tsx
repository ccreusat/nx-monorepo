import { Mic, Pause, Record } from '@ccreusat-monorepo/icons';

import { PlayState, RecordState } from './use-audio-recorder';
import { convertMsToMS } from '@ccreusat-monorepo/ui-library';

export interface AudioRecorderTimerProps {
  recordState: RecordState;
  playState: PlayState;
  recordTime: number | undefined;
  audioTime: number;
}

export const AudioRecorderTimer = ({
  recordState,
  playState,
  recordTime,
  audioTime,
}: AudioRecorderTimerProps) => {
  return (
    <div className="audio-recorder-time my-16 mx-auto">
      {playState === 'IDLE' && (
        <div className="d-flex align-items-center">
          {recordState === 'PAUSED' ? (
            <Pause width={12} height={12} className="me-8 text-danger" />
          ) : (
            <Record width={12} height={12} className="me-8 text-danger" />
          )}
          {convertMsToMS(recordState !== 'IDLE' ? recordTime! : 0)}
        </div>
      )}
      {playState !== 'IDLE' && (
        <div className="d-flex align-items-center mx-auto">
          <Mic width={12} height={12} className="me-8" />
          {convertMsToMS(audioTime * 1000)} /{convertMsToMS(recordTime!)}
        </div>
      )}
    </div>
  );
};

export default AudioRecorderTimer;
