import { GET_MONTH } from "../actions/month.action";
import MonthService from "../services/month.service";
import { IMonthState } from "../../models";
const intialData: IMonthState = {
  totalNumberOfDays: 0,
};

const month = (state = intialData, action: any) => {
  switch (action.type) {
    case GET_MONTH:
      const { month, year } = action.payload;
      const totalNumberOfDays = MonthService.getNumberOfDayForMonth(
        month,
        year
      );
      return { ...state, totalNumberOfDays };

    default:
      return { ...state };
  }
};

export { month };
