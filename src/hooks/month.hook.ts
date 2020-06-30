import { useMemo } from "react";
import MonthService from "../store/services/month.service";
/**
 * Return memoized value, uses useMemo hook.
 * @param month number
 * @param year number
 */
function useTotalDaysOfMonth(month: number, year: number) {
  const totalDays = useMemo(() => {
    return MonthService.getNumberOfDayForMonth(month, year);
  }, [month, year]);

  return totalDays;
}

export { useTotalDaysOfMonth };
