import React from 'react';
import { IEventListComponent } from "models/IEventListComponent";
import { useGetEventsForSelectedDay } from "hooks/month.hook";
import { IFormState } from "models/Events";
/**
 * Return events for given date
 */
export default function EventList(props: IEventListComponent) {
    const list = useGetEventsForSelectedDay(props.date);
    return <ul style={{ color: "black" }}>
        {list.map((item: IFormState) => {
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>;

}