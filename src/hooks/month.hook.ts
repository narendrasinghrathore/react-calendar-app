import { useMemo } from "react";
import MonthService from "../store/services/month.service";
import { useSelector } from "react-redux";
import { IAppState, IFormState } from "models";
import { selectorGetEventList } from "store";
import { getDate } from "services/core.service";
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
/**
 * Return memoized list of events for given date.
 * @param date {string} Sample format 2020-08-08
 * @returns IFormState[]
 */
function useGetEventsForSelectedDay(date: string): IFormState[] {
  const list = useSelector((state: IAppState) => selectorGetEventList(state));
  const events = useMemo(() => {
    return list.filter((item: IFormState) => getDate(item.date) === date);
  }, [list, date]);

  return events;
}

export { useTotalDaysOfMonth, useGetEventsForSelectedDay };
