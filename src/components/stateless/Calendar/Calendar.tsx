import React from 'react';
import Month from '../Month/Month';
import ShowEvents from '../ShowEvents/ShowEvents';
export default function Calendar() {
    return <>
        <h3>
            Calendar</h3>
        <section>
            <div>
                <ShowEvents />
                <Month />
            </div>
        </section>
    </>;
}