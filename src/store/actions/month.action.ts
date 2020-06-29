const ACTION = "[CALENDAR]: ";
const GET_MONTH = `${ACTION} Get Total Days of Months`;
const getMonthDays = (month: number, year: number) => ({
  type: GET_MONTH,
  payload: { month, year },
});

export { getMonthDays, GET_MONTH };
