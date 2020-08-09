import { IFormState, EventMode } from "models";

const ACTION = "[Event]:";
const ACTION_EVENT_ADD_NEW_INIT = `${ACTION} Add New Init`;
const ACTION_EVENT_ADD_NEW_SUCCESS = `${ACTION} Add New Success`;
const ACTION_EVENT_ADD_NEW_FAIL = `${ACTION} Add New Failed`;
const ACTION_EVENT_VIEW_INIT = `${ACTION} View Init`;
const ACTION_EVENT_VIEW_SUCCESS = `${ACTION} View Success`;
const ACTION_EVENT_VIEW_FAIL = `${ACTION} View Fail`;

const ACTION_EVENT_EDIT_MODE = `${ACTION} Edit Mode`;
const ACTION_EVENT_CREATE_MODE = `${ACTION} Create Mode`;
const ACTION_EVENT_VIEW_MODE = `${ACTION} View Mode`;

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

const actionEventCreateMode = () => ({
  type: ACTION_EVENT_CREATE_MODE,
});

/**
 * Action to enable edit controls i.e. update and delete event.
 */
const actionEventEditMode = () => ({
  type: ACTION_EVENT_EDIT_MODE,
});

const actionUpdateEventInit = () => ({
  type: ACTION_EVENT_UPDATE_INIT,
});

const actionUpdateEventSuccess = (form: IFormState) => ({
  type: ACTION_EVENT_UPDATE_SUCCESS,
  payload: { form },
});

const actionUpdateEventFail = () => ({
  type: ACTION_EVENT_UPDATE_FAIL,
});

const actionViewInit = () => ({
  type: ACTION_EVENT_VIEW_INIT,
});

const actionViewSuccess = (id: string) => ({
  type: ACTION_EVENT_VIEW_SUCCESS,
  payload: { id },
});

const actionViewFail = () => ({
  type: ACTION_EVENT_VIEW_FAIL,
});

const actionDeleteEvent = (id: number | string) => ({
  type: ACTION_EVENT_DELETE_INIT,
  payload: { id },
});

/**
 * View event mode
 * @param id string
 */
const actionViewMode = (
  dispatch: Function,
  id: string,
  success: Function,
  fail: Function
) => {
  dispatch(actionViewInit());
  try {
    dispatch(actionViewSuccess(id));
    dispatch(actionShowEvent());
    success();
  } catch (ex) {
    dispatch(actionViewFail());
    fail();
  }
};
/**
 * Action to call when to update an event
 * @param form IFormState
 * @param success Callback on scuccess
 * @param fail Callback on error
 */
const actionUpdateEvent = (
  form: IFormState,
  success: Function,
  fail: Function
) => {
  return (dispatch) => {
    dispatch(actionUpdateEventInit());
    try {
      dispatch(actionUpdateEventSuccess(form));
      dispatch(actionHideEvent());
      success();
    } catch (ex) {
      dispatch(actionUpdateEventFail());
      dispatch(actionHideEvent());
      fail();
    }
  };
};

/**
 * Action to view/create/edit an event
 * @param eventMode
 * @param success
 * @param error
 * @param id
 * @param list
 */
const actionEventMode = (
  eventMode: EventMode,
  success: Function,
  fail: Function,
  id?: string,
  form?: IFormState
) => {
  return (dispatch: any) => {
    switch (eventMode) {
      case EventMode.createMode: {
        dispatch(actionShowEvent());
        dispatch(actionEventCreateMode());
        break;
      }
      case EventMode.viewMode: {
        if (!id) return;
        return actionViewMode(dispatch, id, success, fail);
      }
      default: {
        return dispatch(actionShowEvent());
      }
    }
  };
};

/**
 * Action to create a new event.
 * @param form Pass new event
 * @param list Pass current event list
 * @param success Callback for success
 * @param error Callback for error
 */
const actionAddNewEvent = (
  form: IFormState,
  success: Function,
  error: Function
) => {
  return (dispatch: any) => {
    dispatch({
      type: ACTION_EVENT_ADD_NEW_INIT,
    });

    try {
      dispatch({
        type: ACTION_EVENT_ADD_NEW_SUCCESS,
        payload: { form },
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
  ACTION_EVENT_EDIT_MODE,
  ACTION_EVENT_CREATE_MODE,
  ACTION_EVENT_VIEW_MODE,
  actionShowEvent,
  actionHideEvent,
  actionAddNewEvent,
  actionEventMode,
  actionDeleteEvent,
  actionEventEditMode,
  actionUpdateEvent,
  actionEventCreateMode,
};
