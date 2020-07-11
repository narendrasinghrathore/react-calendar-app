import React from 'react';
import Month from '../Month/Month';
import AddEvent from '../AddEvent/AddEvent';
export default function Calendar() {
    return <>
        <h3>
            Calendar</h3>
        <section>
            <div>
                <AddEvent />
                <Month />
            </div>
        </section>
    </>;
}