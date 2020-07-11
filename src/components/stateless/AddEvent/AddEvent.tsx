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
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Switch from '@material-ui/core/Switch';

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         form: {
//             display: 'flex',
//             flexDirection: 'column',
//             margin: 'auto',
//             width: 'fit-content',
//         },
//         formControl: {
//             marginTop: theme.spacing(2),
//             minWidth: 120,
//         },
//         formControlLabel: {
//             marginTop: theme.spacing(1),
//         },
//     }),
// );
export default function AddEvent() {


    const todayDate = useSelector((state: IAppState) => getSelectedDate(state));

    const dispatch = useDispatch();

    const showHideDialog = useSelector((state: IAppState) => getDialogStatus(state));

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('lg');

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
{/* <form className={classes.form} noValidate>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                        <Select
                            autoFocus
                            value={maxWidth}
                            onChange={handleMaxWidthChange}
                            inputProps={{
                                name: 'max-width',
                                id: 'max-width',
                            }}
                        >
                            <MenuItem value={false as any}>false</MenuItem>
                            <MenuItem value="xs">xs</MenuItem>
                            <MenuItem value="sm">sm</MenuItem>
                            <MenuItem value="md">md</MenuItem>
                            <MenuItem value="lg">lg</MenuItem>
                            <MenuItem value="xl">xl</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        className={classes.formControlLabel}
                        control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
                        label="Full width"
                    />
                </form> 
const handleMaxWidthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMaxWidth(event.target.value as DialogProps['maxWidth']);
};

const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked);
};
const classes = useStyles();*/}