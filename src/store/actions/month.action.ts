const ACTION = "[CALENDAR]: ";
const GET_MONTH = `${ACTION} Get Months`;
const getMonth = (month) => ({ type: GET_MONTH, payload: { month } });

export default getMonth;
export { GET_MONTH };
