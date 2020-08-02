import React from 'react';
import Calendar from '../../stateless/Calendar/Calendar';
import AddEvent from '../AddEvent/AddEvent';
import Paper from '@material-ui/core/Paper';
export default function Home() {
    return <>
        <Paper elevation={3}>
            <AddEvent />
        </Paper>
        <Calendar />
    </>
}