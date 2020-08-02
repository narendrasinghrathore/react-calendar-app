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

export default function AddEvent() {
    const { register, handleSubmit, watch, errors } = useForm();

    const dispatch = useDispatch();

    const isOpen = useSelector((state: IAppState) => selectorShowDialog(state));

    const handleClose = () => {
        dispatch(actionHideEvent())
    }

    return (
        <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Event</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add new event, add title and content here.
          </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="content"
                    label="Content"
                    type="text"
                    fullWidth
                    multiline
                    rows={5}
                />
                <TextField
                    id="datetime-local"
                    label="Date"
                    type="datetime-local"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleClose} color="primary">
                    Save
          </Button>
            </DialogActions>
        </Dialog>
    );
}