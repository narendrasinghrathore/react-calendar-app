import React from "react";
import './Chevron.scss';
import down from "../../../assets/icons/chevron-down-90.png";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../../models";
import { getCalendarVisible, actionShowCalendar, actionHideCalendar } from "../../../store";
/**
 * Chevron,show hide calendar
 */
export default function Chevron() {

  const disptach = useDispatch();
  const isCalendarVisible = useSelector((state: IAppState) => getCalendarVisible(state));




  const logo = down;
  const alt = isCalendarVisible ? "Click hide calendar" : "Click show calendar";

  const cssClasses = () => {
    let baseClass = 'chevron';
    if (!isCalendarVisible) {
      baseClass = baseClass.concat(" show");
    }
    return baseClass;
  }

  const updateShowHide = () => {
    const val = isCalendarVisible ? false : true;
    //calendar is visible, so hide i.e. display:none
    if (isCalendarVisible) {
      disptach(actionHideCalendar(val));
    } else {
      //show calendar
      disptach(actionShowCalendar(val));
    }
  }


  return <span onClick={() => updateShowHide()}>
    <img className={cssClasses()} src={logo} alt={alt} />
  </span>;
}
