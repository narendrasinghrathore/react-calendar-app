import React, { useEffect } from "react";
import './Month.scss';
import { useSelector, useDispatch } from "react-redux";
import { getTotalNumberOfDays, getMonthDays } from "../../../store";
import { cardsContainer } from "../../../styles/month";

export default function Month() {
  const [month, year] = [new Date().getMonth(), new Date().getFullYear()];
  const dispatch = useDispatch();
  const totalDays = useSelector((state: any) => getTotalNumberOfDays(state));


  useEffect(() => {
    dispatch(getMonthDays(month + 1, year));
  }, [dispatch, month, year]);


  return <div style={cardsContainer}>
    {Array.from(Array(totalDays), (_, i) => {
      return <div className="cards" key={i}>
        {i + 1}
      </div>
    })}</div>;
}
