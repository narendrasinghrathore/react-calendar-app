import React from 'react';
import { IEventListComponent } from "models/IEventListComponent";
import { useGetEventsForSelectedDay } from "hooks/month.hook";
import { IFormState, EventMode } from "models/Events";
import { eventListUL, eventListLI } from 'styles/month';
import { useDispatch } from 'react-redux';
import { actionEventMode } from 'store';
/**
 * Return events for given date
 */
export default function EventList(props: IEventListComponent) {
    const list = useGetEventsForSelectedDay(props.date);

    const dispatch = useDispatch();

    const handleClick = (event: any) => {
        event.stopPropagation();
        const { id } = event.target.dataset;
        dispatch(actionEventMode(
            EventMode.viewMode,
            () => { },
            () => { },
            id));

    }

    return <ul style={eventListUL}>
        {list.map((item: IFormState) => {
            return <li onClick={handleClick} data-id={item.id} title={item.title} style={eventListLI} key={item.id}>{item.title}</li>
        })}
    </ul>;

}