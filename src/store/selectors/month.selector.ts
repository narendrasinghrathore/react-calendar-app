import { IAppState } from "../../models";
/**
 * Get Application State
 * @param state IAppState
 */
export const getAppState = (state: IAppState) => state;
/**
 * Get Module State
 * @param state IMonthState
 */
export const getModuleState = (state: IAppState) => getAppState(state).month;
/**
 * Get total number of days of selected month
 * @param state totalNumberOfDays
 */
export const getTotalNumberOfDays = (state: IAppState) =>
  getModuleState(state).totalNumberOfDays;
