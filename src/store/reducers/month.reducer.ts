import { GET_MONTH, GET_WEEKNAMES, SET_DATE } from "../actions/month.action";
import MonthService from "../services/month.service";
import { IMonthState } from "../../models";
const intialData: IMonthState = {
  totalNumberOfDays: 0,
  weekNames: [],
  selectedDate: MonthService.getTodayDate()
};

const month = (state = intialData || undefined, action: any) => {
  switch (action.type) {
    case GET_MONTH:
      const { month, year } = action.payload;
      const totalNumberOfDays = MonthService.getNumberOfDayForMonth(
        month,
        year
      );
      return { ...state, totalNumberOfDays };

    case GET_WEEKNAMES:
      const weekNames = MonthService.getWeekNames();
      return { ...state, weekNames };

    case SET_DATE:
      const date = action.payload;
      return { ...state, selectedDate: date };

    default:
      return { ...state };
  }
};

export { month };
