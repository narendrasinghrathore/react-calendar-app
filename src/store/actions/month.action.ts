const ACTION = "[CALENDAR]: ";
const GET_MONTH = `${ACTION} Get Total Days of Months`;
const GET_WEEKNAMES = `${ACTION} Get Week Names`;
const SET_DATE = `${ACTION} Set Selected Date`;
const SHOW_CALENDAR = `${ACTION} Show Calendar`;
const HIDE_CALENDAR = `${ACTION} Hide Calendar`;

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

export {
  actionGetMonthDays,
  actionGetWeekNames,
  actionSetSelectedDate,
  actionShowCalendar,
  actionHideCalendar,
  GET_MONTH,
  GET_WEEKNAMES,
  SET_DATE,
  SHOW_CALENDAR,
  HIDE_CALENDAR,
};
