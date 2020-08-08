import { IFormState } from "models";

const ACTION = "[Event]:";
const ACTION_EVENT_ADD_NEW_INIT = `${ACTION} Add New Init`;
const ACTION_EVENT_ADD_NEW_SUCCESS = `${ACTION} Add New Success`;
const ACTION_EVENT_ADD_NEW_FAIL = `${ACTION} Add New Failed`;
const ACTION_EVENT_VIEW_INIT = `${ACTION} View Init`;
const ACTION_EVENT_VIEW_SUCCESS = `${ACTION} View Success`;
const ACTION_EVENT_VIEW_FAIL = `${ACTION} View Fail`;
const ACTION_EVENT_DELETE_INIT = `${ACTION} Delete Init`;
const ACTION_EVENT_DELETE_SUCCESS = `${ACTION} Delete Success`;
const ACTION_EVENT_DELETE_FAIL = `${ACTION} Delete Fail`;
const ACTION_EVENT_UPDATE_INIT = `${ACTION} Update Init`;
const ACTION_EVENT_UPDATE_SUCCESS = `${ACTION} Update Success`;
const ACTION_EVENT_UPDATE_FAIL = `${ACTION} Update Fail`;

// const ACTION_EVENT_UPDATE = `${ACTION} Update`;

const ACTION_EVENT_SHOW_DIALOG = `${ACTION} Show Dialog`;
const ACTION_EVENT_HIDE_DIALOG = `${ACTION} Hide Dialog`;
/**
 * Show event dialog to view/add/edit/delete event.
 */
const actionShowEvent = () => ({
  type: ACTION_EVENT_SHOW_DIALOG,
});
/**
 * Hide event dialog
 */
const actionHideEvent = () => ({
  type: ACTION_EVENT_HIDE_DIALOG,
});

const actionViewEvent = (id: number | string) => ({
  type: ACTION_EVENT_VIEW_INIT,
  payload: { id },
});

const actionUpdateEvent = (form: IFormState) => ({
  type: ACTION_EVENT_UPDATE_INIT,
  payload: { form },
});

const actionDeleteEvent = (id: number | string) => ({
  type: ACTION_EVENT_DELETE_INIT,
  payload: { id },
});

/**
 * Action to create a new event.
 * @param form Pass new event
 * @param list Pass current event list
 * @param success Callback for success
 * @param error Callback for error
 */
const actionAddNewEvent = (
  form: IFormState,
  list: IFormState[],
  success: Function,
  error: Function
) => {
  return (dispatch: any) => {
    dispatch({
      type: ACTION_EVENT_ADD_NEW_INIT,
    });

    try {
      list = [form, ...list];

      dispatch({
        type: ACTION_EVENT_ADD_NEW_SUCCESS,
        payload: { list },
      });
      success();
    } catch (ex) {
      dispatch({
        type: ACTION_EVENT_ADD_NEW_FAIL,
      });
      error(ex);
    }
  };
};

export {
  ACTION_EVENT_SHOW_DIALOG,
  ACTION_EVENT_HIDE_DIALOG,
  ACTION_EVENT_ADD_NEW_INIT,
  ACTION_EVENT_ADD_NEW_SUCCESS,
  ACTION_EVENT_ADD_NEW_FAIL,
  ACTION_EVENT_VIEW_INIT,
  ACTION_EVENT_VIEW_SUCCESS,
  ACTION_EVENT_VIEW_FAIL,
  ACTION_EVENT_DELETE_INIT,
  ACTION_EVENT_DELETE_SUCCESS,
  ACTION_EVENT_DELETE_FAIL,
  ACTION_EVENT_UPDATE_INIT,
  ACTION_EVENT_UPDATE_SUCCESS,
  ACTION_EVENT_UPDATE_FAIL,
  actionShowEvent,
  actionHideEvent,
  actionAddNewEvent,
  actionViewEvent,
  actionDeleteEvent,
  actionUpdateEvent,
};
