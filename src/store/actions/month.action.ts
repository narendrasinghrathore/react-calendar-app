const ACTION = "[CALENDAR]:";
const GET_MONTH = `${ACTION} Get Total Days of Months`;
const GET_WEEKNAMES = `${ACTION} Get Week Names`;
const SET_DATE = `${ACTION} Set Selected Date`;
const SHOW_CALENDAR = `${ACTION} Show Calendar`;
const HIDE_CALENDAR = `${ACTION} Hide Calendar`;
const SHOW_DIALOG = `${ACTION} Show Dialog`;
const HIDE_DIALOG = `${ACTION} Hide Dialog`;
const actionShowCalendar = (flag: boolean) => ({
  type: SHOW_CALENDAR,
  payload: true,
});

const actionHideCalendar = (flag: boolean) => ({
  type: HIDE_CALENDAR,
  payload: false,
});

const actionGetMonthDays = (month: number, year: number) => ({
  type: GET_MONTH,
  payload: { month, year },
});

const actionGetWeekNames = () => ({
  type: GET_WEEKNAMES,
});

const actionSetSelectedDate = (date: string) => ({
  type: SET_DATE,
  payload: date,
});
/**
 * Show event(s).
 */
const actionShowDialog = () => ({
  type: SHOW_DIALOG,
});
/**
 * Hide event(s) dialog
 */
const actionHideDialog = () => ({
  type: HIDE_DIALOG,
});

export {
  actionGetMonthDays,
  actionGetWeekNames,
  actionSetSelectedDate,
  actionShowCalendar,
  actionHideCalendar,
  actionShowDialog,
  actionHideDialog,
  GET_MONTH,
  GET_WEEKNAMES,
  SET_DATE,
  SHOW_CALENDAR,
  HIDE_CALENDAR,
  SHOW_DIALOG,
  HIDE_DIALOG,
};
