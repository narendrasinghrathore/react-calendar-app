import { GET_MONTH } from "../actions/month.action";
import MonthService from "../services/month.service";
const intialData = {
  totaldays: 0,
};

const month = (state = intialData, action) => {
  switch (action.type) {
    case GET_MONTH:
      const { month, year } = action.payload;
      const totaldays = MonthService.getNumberOfDayForMonth(month, year);
      return { ...state, totaldays };

    default:
      return { ...state };
  }
};

export default month;
