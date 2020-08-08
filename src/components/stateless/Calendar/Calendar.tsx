import React from 'react';
import LazyLoadingComponent from 'utils/LazyLoadingComponent';
const ShowEvents = React.lazy(() => import('../ShowEvents/ShowEvents'));
const Month = React.lazy(() => import('../Month/Month'));
export default function Calendar() {
    return <>
        <h3>
            Calendar</h3>
        <section>
            <div>
                <LazyLoadingComponent>
                    <ShowEvents />
                </LazyLoadingComponent>

                <LazyLoadingComponent><Month /></LazyLoadingComponent>
            </div>
        </section>
    </>;
}