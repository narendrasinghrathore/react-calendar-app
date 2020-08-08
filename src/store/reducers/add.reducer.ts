import { IEventState } from "../../models/Events";
import {
  ACTION_EVENT_HIDE_DIALOG,
  ACTION_EVENT_SHOW_DIALOG,
  ACTION_EVENT_ADD_NEW_INIT,
  ACTION_EVENT_ADD_NEW_SUCCESS,
  ACTION_EVENT_ADD_NEW_FAIL,
  ACTION_EVENT_VIEW_INIT,
  ACTION_EVENT_DELETE_INIT,
  ACTION_EVENT_DELETE_FAIL,
  ACTION_EVENT_DELETE_SUCCESS,
  ACTION_EVENT_VIEW_FAIL,
  ACTION_EVENT_VIEW_SUCCESS,
} from "../actions/add.action";
const initialState: IEventState = {
  loading: false,
  showDialog: false,
  addEventLoading: false,
  deleteEventLoading: false,
  viewEventLoading: false,
  list: [],
  selectedEvent: null,
};
const event = (state = initialState || undefined, action: any): IEventState => {
  switch (action.type) {
    case ACTION_EVENT_SHOW_DIALOG: {
      return { ...state, showDialog: true };
    }
    case ACTION_EVENT_HIDE_DIALOG: {
      return { ...state, showDialog: false };
    }
    case ACTION_EVENT_ADD_NEW_INIT: {
      return { ...state, addEventLoading: true };
    }
    case ACTION_EVENT_ADD_NEW_SUCCESS: {
      const { list } = action.payload;
      return { ...state, addEventLoading: false, list };
    }
    case ACTION_EVENT_ADD_NEW_FAIL: {
      return { ...state, addEventLoading: false };
    }
    case ACTION_EVENT_VIEW_INIT: {
      return { ...state, viewEventLoading: true };
    }
    case ACTION_EVENT_VIEW_SUCCESS: {
      const { selectedEvent } = action.payload;
      return {
        ...state,
        selectedEvent: selectedEvent ? selectedEvent : null,
        viewEventLoading: false,
      };
    }
    case ACTION_EVENT_VIEW_FAIL: {
      return {
        ...state,
        viewEventLoading: false,
      };
    }

    case ACTION_EVENT_DELETE_INIT: {
      return { ...state, deleteEventLoading: true };
    }
    case ACTION_EVENT_DELETE_SUCCESS: {
      const { list } = action.payload;
      return { ...state, deleteEventLoading: false, list };
    }
    case ACTION_EVENT_DELETE_FAIL: {
      return { ...state, deleteEventLoading: false };
    }

    default: {
      return { ...state };
    }
  }
};

export { event };
