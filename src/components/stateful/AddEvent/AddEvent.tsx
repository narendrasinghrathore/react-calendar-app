import React from "react";
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
import { selectorShowDialog, actionHideEvent } from "../../../store";
import Alert from '@material-ui/lab/Alert';
import Collapse from "@material-ui/core/Collapse";
import EventIcon from '@material-ui/icons/Event';
import { TransitionProps } from '@material-ui/core/transitions';
import { Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function AddEvent() {
    const { register, handleSubmit, errors, } = useForm();

    const dispatch = useDispatch();

    /**
     * Return today's date as default selected date value
     */
    const date = () => {
        const value = new Date();
        const month_ = value.getMonth() + 1;
        const month = month_ > 9 ? month_ : `0${month_}`;
        const date_ = value.getDate();
        const dateFormtted = date_ > 9 ? date_ : `0${date_}`;
        const hour =
            value.getHours() > 9 ? value.getHours() : `0${value.getHours()}`;
        const min =
            value.getMinutes() > 9 ? value.getMinutes() : `0${value.getMinutes()}`;
        return `${value.getFullYear()}-${month}-${dateFormtted}T${hour}:${min}`;
    };

    const isOpen = useSelector((state: IAppState) => selectorShowDialog(state));

    const handleClose = () => {
        dispatch(actionHideEvent());
    };

    const onFormSubmit = (form: any) => {
        console.log(form);
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
                <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
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
                    />
                    <TextField
                        name="date"
                        id="datetime-local"
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
                        <Button type="submit" color="primary">
                            Save
            </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}
