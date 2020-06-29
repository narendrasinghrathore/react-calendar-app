const MonthService = {
  /**
   * Return total number of days in given month and year
   */
  getNumberOfDayForMonth: (month: number, year: number) => {
    if (!Number.isInteger(month) || !Number.isInteger(year)) return [];
    if (month < 0 || month > 11) return [];
    console.log(new Date(year, month, 0));
    return new Date(year, month, 0).getDate();
  },
};
export default MonthService;
