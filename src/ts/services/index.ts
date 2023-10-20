// TODO should be loaded from app in future
import "../resources/services/BlogResourceService";
import "../resources/services/MindmapResourceService";

import { IOdeServices, OdeServices } from "./OdeServices";

export const odeServices: IOdeServices = new OdeServices();

export * from "../directory/interface";
export * from "../resources/interface";
export * from "../rights/interface";
export * from "../share/interface";
export * from "../workspace/interface";
