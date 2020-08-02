const ACTION = "[Event]:";
const ACTION_EVENT_ADD_NEW_INIT = `${ACTION} Add New Init`;
const ACTION_EVENT_SUCCESS = `${ACTION} Add New Success`;
const ACTION_EVENT_FAIL = `${ACTION} Add New Failed`;
const ACTION_EVENT_VIEW = `${ACTION} View`;
const ACTION_EVENT_DELETE = `${ACTION} Delete`;

const ACTION_EVENT_UPDATE = `${ACTION} Update`;

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

export {
  ACTION_EVENT_SHOW_DIALOG,
  ACTION_EVENT_HIDE_DIALOG,
  actionShowEvent,
  actionHideEvent,
};
