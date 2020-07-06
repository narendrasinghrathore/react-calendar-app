import React, { useEffect, useState } from "react";
import './Month.scss';
import { useSelector, useDispatch } from "react-redux";
import { getTotalNumberOfDays, actionGetMonthDays, actionGetWeekNames, getWeekNames, actionSetSelectedDate, getSelectedDate, getCalendarVisible } from "../../../store";
import { IAppState, WeekName } from "../../../models";
import Chevron from "../Chevron/Chevron";

export default function Month() {

  /**
   * Hide or show the calendar
   */
  const isCalendarVisible = useSelector((state: IAppState) => getCalendarVisible(state));


  /**
   * Month i.e. number, default would be current day/ today.
   * Changes as per user selection from input type date.
   */
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  /**
   * Year i.e. number, default would be current day/ today.
   * Changes as per user selection from input type date.
   */
  const [year, setYear] = useState(new Date().getFullYear());
  /**
   * Using state management
   */
  const dispatch = useDispatch();
  /**
   * Totol days of given month.
   */
  const totalDays = useSelector((state: any) => getTotalNumberOfDays(state));
  /**
   * Return week name, starts with Sunday, Monday .. , Saturday
   */
  const weekNames: WeekName[] = useSelector((state: IAppState) => getWeekNames(state));
  /**
   * Set today date, used in our input type date.
   */
  const [todayDate, setTodayDate] = useState(useSelector((state: IAppState) => getSelectedDate(state)));

  /**
   * As getDay() return value between 0-6 i.e 0 is Sunday and 6 is Saturday.
   * So we need to add 1 to get exact index to update our property which is
   * used to set start column position in grid. As we position first day of month
   * based on grid-column-start rest fall accordingly in order.
   */
  const gridColumnStartFrom = new Date(`${year}-${month}-01`).getDay() + 1;

  /**
   * Get week name(s)
   */
  useEffect(() => {
    //Call action get week names(s)
    dispatch(actionGetWeekNames());
  }, [dispatch]);

  /**
   * Get total number of days in given month, based on month and year as input.
   */
  useEffect(() => {
    // Call action get given month total days
    dispatch(actionGetMonthDays(month, year));
  }, [dispatch, month, year]);

  /**
   * Update the todayDate and get total number of days for given month and year.
   * @param e Event
   */
  const updateSelectedDate = (e: any) => {
    e.stopPropagation();
    const { date } = e.target.dataset;
    const month_ = month;
    const value = `${year}-${month_ < 10 ? '0' + month_ : month_}-${date.length === 1 ? '0' + date : date}`

    const result = {
      target: {
        value
      },
      stopPropagation: () => { }
    }
    updateDate(result);
  }

  /**
   * Update the selectedDate
   * @param e Event
   */
  const updateDate = (e: any) => {
    e.stopPropagation();
    const { value } = e.target;
    const [y, m] = value.split("-");
    setYear(parseInt(y));
    setMonth(parseInt(m));
    setTodayDate(value);
    dispatch(actionSetSelectedDate(value));
  }

  /**
   * Will set classes based on user selection in calendar
   * or default that is today
   * @param dd number i.e. 0 - 29/30/31
   */
  const selectedDate = (dd: number) => {
    dd = dd + 1;
    let classes = "cards";
    const selectedDate = parseInt(todayDate.split("-")[2]);

    if (dd === selectedDate) {
      classes = classes.concat(' selected-date');
    }
    return classes;
  }


  const calendarContainerClasses = () => {
    let baseClass = 'cardContainer';
    if (!isCalendarVisible) {
      baseClass = baseClass.concat(" hideCalendar");
    }
    return baseClass;
  }


  return <div>
    <div className="date-picker">
      <input type="date" onChange={(e) => updateDate(e)} value={todayDate} />
      <Chevron />
    </div>
    <div className="weekNames">
      {weekNames.map((_) => (<div key={_.alias} className="weekName">{_.alias.toLocaleUpperCase()}</div>))}
    </div>
    <div className={calendarContainerClasses()}>

      {Array.from(Array(totalDays), (_, i) => {
        const style = i === 0 ? { gridColumnStart: gridColumnStartFrom } : {};
        return <div
          data-date={i + 1} style={style}
          onClick={(e) => updateSelectedDate(e)} className={selectedDate(i)} key={i}>
          <span data-date={i + 1}>{i + 1} </span>
        </div>
      })}
    </div>
  </div>;
}
