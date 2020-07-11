import React from "react";

import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../../models";
import { getDialogStatus, actionHideDialog, getSelectedDate } from "../../../store";

export default function AddEvent() {


    const todayDate = useSelector((state: IAppState) => getSelectedDate(state));

    const dispatch = useDispatch();

    const showHideDialog = useSelector((state: IAppState) => getDialogStatus(state));

    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState<DialogProps['maxWidth']>('lg');

    const handleClose = () => {
        dispatch(actionHideDialog());
    };


    return <>
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={showHideDialog}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle id="max-width-dialog-title">{todayDate}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Dialog Text
          </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
          </Button>
            </DialogActions>
        </Dialog>
    </>;
}