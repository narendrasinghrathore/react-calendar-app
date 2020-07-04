const ACTION = "[CALENDAR]: ";
const GET_MONTH = `${ACTION} Get Total Days of Months`;
const GET_WEEKNAMES = `${ACTION} Get Week Names`;
const actionGetMonthDays = (month: number, year: number) => ({
  type: GET_MONTH,
  payload: { month, year },
});

const actionGetWeekNames = () => ({
  type: GET_WEEKNAMES,
});

export { actionGetMonthDays, actionGetWeekNames, GET_MONTH, GET_WEEKNAMES };
