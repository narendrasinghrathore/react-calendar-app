import React, { useEffect, useState, useRef } from "react";
import './Month.scss';
import { useSelector, useDispatch } from "react-redux";
import { getTotalNumberOfDays, actionGetMonthDays, actionGetWeekNames, getWeekNames, actionSetSelectedDate, getSelectedDate } from "../../../store";
import { IAppState, WeekName } from "../../../models";

export default function Month() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  /**
   * Using state management
   */
  const dispatch = useDispatch();
  const totalDays = useSelector((state: any) => getTotalNumberOfDays(state));
  const weekNames: WeekName[] = useSelector((state: IAppState) => getWeekNames(state));
  /**
   * Set today date
   */
  const [todayDate, setTodayDate] = useState(useSelector((state: IAppState) => getSelectedDate(state)));

  const dateRef = useRef<HTMLInputElement>(null);

  /**
   * As getDay() return value between 0-6 i.e 0 is Sunday and 6 is Saturday.
   * So we need to add 1 to get exact index to update our property which is
   * used to start the column grid position. As we position first day of month
   * based on grid-column-start rest fall accordingly in order.
   */
  const gridColumnStartFrom = new Date(`${year}-${month}-01`).getDay() + 1;

  useEffect(() => {
    //Call action get week names(s)
    dispatch(actionGetWeekNames());
  }, [dispatch]);

  useEffect(() => {
    // Call action get given month total days
    dispatch(actionGetMonthDays(month, year));
  }, [dispatch, month, year]);

  const openModal = (e: any) => {
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

  const updateDate = (e: any) => {
    e.stopPropagation();
    const { value } = e.target;
    const [y, m] = value.split("-");
    setYear(parseInt(y));
    setMonth(parseInt(m));
    setTodayDate(value);
    dispatch(actionSetSelectedDate(value));
  }

  const selectedDate = (dd: number) => {
    dd = dd + 1;
    let classes = "cards";
    const selectedDate = parseInt(todayDate.split("-")[2]);

    if (dd === selectedDate) {
      classes = classes.concat(' selected-date');
    }
    return classes;
  }


  return <div>
    <div className="date-picker">
      <input ref={dateRef} type="date" onChange={(e) => updateDate(e)} value={todayDate} />
    </div>
    <div className="cardContainer">
      {weekNames.map((_) => (<div key={_.alias} className="weekName">{_.alias}</div>))}
      {Array.from(Array(totalDays), (_, i) => {
        const style = i === 0 ? { gridColumnStart: gridColumnStartFrom } : {};
        return <div
          data-date={i + 1} style={style}
          onClick={(e) => openModal(e)} className={selectedDate(i)} key={i}>
          {i + 1}
        </div>
      })}</div></div>;
}
