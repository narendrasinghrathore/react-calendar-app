import React from 'react';
import { IEventListComponent } from "models/IEventListComponent";
import { useGetEventsForSelectedDay } from "hooks/month.hook";
import { IFormState } from "models/Events";
import { eventListUL, eventListLI } from 'styles/month';
/**
 * Return events for given date
 */
export default function EventList(props: IEventListComponent) {
    const list = useGetEventsForSelectedDay(props.date);
    return <ul style={eventListUL}>
        {list.map((item: IFormState) => {
            return <li title={item.title} style={eventListLI} key={item.id}>{item.title}</li>
        })}
    </ul>;

}