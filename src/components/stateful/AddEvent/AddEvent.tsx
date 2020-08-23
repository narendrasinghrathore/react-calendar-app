import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../../models/AppState";
import { selectorShowDialog, getSelectedDate, selectorEventEditMode, selectorEventViewMode, selectorEventCreateMode, selectorViewSelectedEvent } from "store/selectors";
import Alert from '@material-ui/lab/Alert';
import Collapse from "@material-ui/core/Collapse";
import EventIcon from '@material-ui/icons/Event';
import EditIcon from '@material-ui/icons/Edit';
import { TransitionProps } from '@material-ui/core/transitions';
import { Slide } from "@material-ui/core";
import { actionHideEvent, actionAddNewEvent, actionUpdateEvent, actionEventEditMode } from "store/actions";
import uid from 'uid';
import { IFormState } from "models";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

/**
 * Component AddEvent let you add, edit events.
 * @example
 * const { register, handleSubmit, errors, reset } = useForm();
 * const defaultSelectedDate = useSelector((state: IAppState) => getSelectedDate(state));
 * const editMode = useSelector((state: IAppState) => selectorEventEditMode(state));
 * const viewMode = useSelector((state: IAppState) => selectorEventViewMode(state));
 * const createMode = useSelector((state: IAppState) => selectorEventCreateMode(state));
 * const selectedEvent: IFormState | null = useSelector((state: IAppState) => selectorViewSelectedEvent(state));
 * const dispatch = useDispatch();
 */
export default function AddEvent() {
    const { register, handleSubmit, errors, reset } = useForm();
    const defaultSelectedDate = useSelector((state: IAppState) => getSelectedDate(state));

    const editMode = useSelector((state: IAppState) => selectorEventEditMode(state));
    const viewMode = useSelector((state: IAppState) => selectorEventViewMode(state));
    const createMode = useSelector((state: IAppState) => selectorEventCreateMode(state));

    const selectedEvent: IFormState | null = useSelector((state: IAppState) => selectorViewSelectedEvent(state));

    const dispatch = useDispatch();

    /**
    * Return today's date as default selected date value
    */
    const date = useCallback((val?: number) => {
        const value = val ? new Date(val) : new Date();

        const hour =
            value.getHours() > 9 ? value.getHours() : `0${value.getHours()}`;
        const min =
            value.getMinutes() > 9 ? value.getMinutes() : `0${value.getMinutes()}`;

        if (val) {
            const month = (value.getMonth() + 1) > 10 ? (value.getMonth() + 1) : ("0" + (value.getMonth() + 1));
            const dateFormtted = value.getDate() > 10 ? value.getDate() : "0" + value.getDate();
            return `${value.getFullYear()}-${month}-${dateFormtted}T${hour}:${min}`;
        }
        return `${defaultSelectedDate}T${hour}:${min}`;
    }, [defaultSelectedDate]);

    useEffect(() => {
        if (viewMode === true && selectedEvent) {
            reset({ ...selectedEvent, date: date(selectedEvent.date) });
        }
        if (createMode) {
            reset({});
        }
    }, [date, reset, selectedEvent, viewMode, createMode]);

    useEffect(() => {
        return () => {
            reset({});
        }

    }, [reset]);



    const isOpen = useSelector((state: IAppState) => selectorShowDialog(state));

    const handleClose = () => {
        dispatch(actionHideEvent());
    };

    const onFormSubmit = (form: any) => {
        if (editMode && selectedEvent) {
            dispatch(actionUpdateEvent({ ...form, id: selectedEvent.id, date: new Date(form.date).getTime() }, () => { }, () => { }));
        }
        if (createMode) {
            dispatch(
                actionAddNewEvent(
                    {
                        ...form, id: uid(32), date: new Date(form.date).getTime()
                    },
                    () => { dispatch(actionHideEvent()); },
                    (err: any) => { }
                ));
        }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="Event"
            TransitionComponent={Transition}
        >
            <DialogTitle id="form-dialog-title">
                <EventIcon />
                Event
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add new event, add title and content here.
        </DialogContentText>
                <form onSubmit={handleSubmit((form) => onFormSubmit(form))} noValidate>
                    <TextField
                        name="title"
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        multiline
                        rows={2}
                        fullWidth

                        disabled={viewMode}
                        inputRef={register({ required: "Title required" })}
                    />
                    <Collapse in={errors.title}>
                        <Alert severity="info">{errors.title?.message}</Alert>
                    </Collapse>
                    <TextField
                        title="content"
                        margin="dense"
                        id="content"
                        label="Content"
                        name="content"
                        type="text"
                        fullWidth
                        multiline
                        rows={5}
                        inputRef={register}
                        disabled={viewMode}
                    />
                    <TextField
                        name="date"
                        id="datetime-local"
                        disabled={viewMode}
                        label="Date"
                        fullWidth
                        type="datetime-local"
                        defaultValue={date()}
                        inputRef={register({
                            required: "Please selecte date and time for event."
                        })}
                    />
                    <Collapse in={errors.date}>
                        <Alert severity="info">{errors.date?.message}</Alert>
                    </Collapse>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        {viewMode && <Button onClick={() => dispatch(actionEventEditMode())} aria-label="Click to edit event"><EditIcon /></Button>}
                        {editMode && <Button title="Click to update event" type="submit" color="primary">
                            Update
                        </Button>}
                        {createMode && <Button title="Save new event" type="submit" color="primary">
                            Save
                        </Button>}
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}
