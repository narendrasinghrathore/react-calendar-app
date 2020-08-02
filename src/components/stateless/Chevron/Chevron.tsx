import React, { useState } from "react";
import './Chevron.scss';
import down from "../../../assets/icons/chevron-down-90.png";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../../models";
import { getCalendarVisible, actionShowCalendar, actionHideCalendar } from "../../../store";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

/**
 * Chevron,show hide calendar
 */
export default function Chevron() {

  const disptach = useDispatch();
  const isCalendarVisible = useSelector((state: IAppState) => getCalendarVisible(state));

  const [title, setTitle] = useState('Click to hide');




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

      setTitle('Click to show ');
      disptach(actionHideCalendar(val));
    } else {
      //show calendar
      setTitle('Click to hide');
      disptach(actionShowCalendar(val));
    }
  }


  return <span onClick={() => updateShowHide()}>
    <KeyboardArrowDownIcon className={cssClasses()} titleAccess={title} />
    {/* <img className={cssClasses()} src={logo} alt={alt} /> */}
  </span>;
}
