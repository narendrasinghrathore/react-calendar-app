import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTotalNumberOfDays, getMonthDays } from "../../../store";

export default function Month() {
  const [month, year] = [new Date().getMonth(), new Date().getFullYear()];
  const dispatch = useDispatch();
  const totalDays = useSelector((state: any) => getTotalNumberOfDays(state));


  useEffect(() => {
    dispatch(getMonthDays(month + 1, year));
  }, [dispatch, month, year]);


  return <>
    {Array.from(Array(totalDays), (_, i) => {
      return <div key={i}>
        {i + 1}
      </div>
    })}</>;
}
