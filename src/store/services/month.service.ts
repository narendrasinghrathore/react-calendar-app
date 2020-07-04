import { WeekName } from "../../models";

const incorrectDateForamtLabel = "Incorrect date format.";
const MonthService = {
  /**
   * Return total number of days in given month and year
   */
  getNumberOfDayForMonth: (month: number, year: number): number => {
    if (!Number.isInteger(month) || !Number.isInteger(year)) return 0;
    if (month < 0 || month > 11) return 0;
    try {
      const date = new Date(year, month, 0);
      if (date && date.toString() === "Invalid Date") {
        console.warn(incorrectDateForamtLabel);
        return 0;
      }
      return new Date(year, month, 0).getDate();
    } catch (e) {
      console.warn(incorrectDateForamtLabel);
      return 0;
    }
  },
  getWeekNames: (): WeekName[] => {
    return [
      { alias: "Sun", name: "Sunday" },
      { alias: "Mon", name: "Monday" },
      { alias: "Tue", name: "Tuesday" },
      { alias: "Wed", name: "Wednesday" },
      { alias: "Thu", name: "Thursday" },
      { alias: "Fri", name: "Friday" },
      { alias: "Sat", name: "Saturday" },
    ];
  },
};
export default MonthService;
