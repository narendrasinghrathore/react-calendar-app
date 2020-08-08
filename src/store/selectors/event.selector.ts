import { IAppState } from "../../models/AppState";
import { IEventState, IFormState } from "../../models/Events";
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
/**
 * Return selected event
 * @param state IFormState | null
 */
export const selectorViewSelectedEvent = (
  state: IAppState
): IFormState | null => getEventState(state).selectedEvent;
/**
 * Return list of events
 * @param state IFormState[]
 */
export const selectorGetEventList = (state: IAppState): IFormState[] =>
  getEventState(state).list;
