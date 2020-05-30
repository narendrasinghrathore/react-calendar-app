const MonthService = {
  /**
   * Return total number of days in given month and year
   */
  getNumberOfDayForMonth: (month, year) => {
    if (!Number.isInteger(month) || !Number.isInteger(year)) return [];
    if (month < 0 || month > 11) return [];
    return new Date(year, month, 0).getDate();
  },
};
export default MonthService;
