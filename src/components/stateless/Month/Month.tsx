import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTotalNumberOfDays, getMonthDays } from "../../../store";

export default function Month() {
  const dispatch = useDispatch();
  const totalDays = useSelector((state: any) => getTotalNumberOfDays(state));
  const [month, year] = [new Date().getMonth(), new Date().getFullYear()];

  useEffect(() => {
    dispatch(getMonthDays(month + 1, year));
  }, [dispatch, month, year]);


  return <>
    <div>Month:{totalDays}</div></>;
}
