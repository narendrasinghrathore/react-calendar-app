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
/**
 * Return week names array of object i.e. [ { name: "Sunday" alias:"Sun"}, ...]
 * @param state IAppState
 */
export const getWeekNames = (state: IAppState) =>
  getModuleState(state).weekNames;
/**
 * Return selected, initially that would be your current date in yyyy-MM-dd format
 * @param state IAppState
 */
export const getSelectedDate = (state: IAppState) =>
  getModuleState(state).selectedDate;
/**
 * Is calendar visible
 * @param state IAppState
 */
export const getCalendarVisible = (state: IAppState) =>
  getModuleState(state).visible;
/**
 * Return flag to show or hide add event dialog
 * @param state IAppState
 */
export const getDialogStatus = (state: IAppState) =>
  getModuleState(state).showDialog;
