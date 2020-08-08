/**
 * Return date from given number.
 * That is returned time of a date.
 * new Date().getTime()
 * Sample format 1596884100000
 * @param date number
 * @return 2020-08-08
 */
const getDate = (date: number): string | null => {
  if (!date) return null;
  const value = new Date(date);
  /**
   * The getMonth() method returns the month in the specified date according to local time,
   * as a zero-based value (where zero indicates the first month of the year).
   */
  const month = value.getMonth() + 1;
  return `${value.getFullYear()}-${month > 10 ? month : "0" + month}-${
    value.getDate() > 10 ? value.getDate() : "0" + value.getDate()
  }`;
};

export { getDate };
