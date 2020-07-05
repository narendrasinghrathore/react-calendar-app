const ACTION = "[CALENDAR]: ";
const GET_MONTH = `${ACTION} Get Total Days of Months`;
const GET_WEEKNAMES = `${ACTION} Get Week Names`;
const SET_DATE = `${ACTION} Set Selected Date`;

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
  GET_MONTH,
  GET_WEEKNAMES,
  SET_DATE
};
