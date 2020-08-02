import { IAppState } from "../../models/AppState";
import { IEventState } from "../../models/Events";
import { getAppState } from "./app.selector";

/**
 * Get Module State
 * @param state {IEventState}
 * @returns state {IEventState}
 */
export const getEventState = (state: IAppState): IEventState =>
  getAppState(state).event;
/**
 * Get event dialog state i.e. open or close
 * @param state {IAppState}
 */
export const selectorShowDialog = (state: IAppState): boolean =>
  getEventState(state).showDialog;
