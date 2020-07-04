import React, { useEffect } from "react";
import './Month.scss';
import { useSelector, useDispatch } from "react-redux";
import { getTotalNumberOfDays, actionGetMonthDays, actionGetWeekNames, getWeekNames } from "../../../store";
import { IAppState, WeekName } from "../../../models";

export default function Month() {
  const [month, year] = [new Date().getMonth(), new Date().getFullYear()];
  const dispatch = useDispatch();
  const totalDays = useSelector((state: any) => getTotalNumberOfDays(state));
  const weekNames: WeekName[] = useSelector((state: IAppState) => getWeekNames(state));


  useEffect(() => {

    //Call action get week names(s)
    dispatch(actionGetWeekNames());
    // Call action get given month total days
    dispatch(actionGetMonthDays(month + 1, year));
  }, [dispatch, month, year]);


  return <div><div className="cardContainer">
    {weekNames.map((_, i) => (<div className="weekName">{_.alias}</div>))}
    {Array.from(Array(totalDays), (_, i) => {
      return <div className="cards" key={i}>
        {i + 1}
      </div>
    })}</div></div>;
}
