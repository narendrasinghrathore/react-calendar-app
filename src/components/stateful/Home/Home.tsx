import React from 'react';
import Paper from '@material-ui/core/Paper';
import LazyLoadingComponent from 'utils/LazyLoadingComponent';
const AddEvent = React.lazy(() => import("../AddEvent/AddEvent"));
const Calendar = React.lazy(() => import('../../stateless/Calendar/Calendar'));
export default function Home() {
    return <>
        <Paper elevation={1}>
            <LazyLoadingComponent><AddEvent />
            </LazyLoadingComponent>
        </Paper>
        <LazyLoadingComponent><Calendar />
        </LazyLoadingComponent>

    </>
}