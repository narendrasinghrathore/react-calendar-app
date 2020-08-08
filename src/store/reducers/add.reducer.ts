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
  list: [
    {
      title: "8 Aug event",
      content: "Some content",
      date: 1596887580000,
      id: "9a0h95qi93uizn0szegd5skrpzjqrogf",
    },
    {
      title: "Event on 7 Aug",
      content: "Let see, what are events for next week. ",
      date: 1596800940000,
      id: "y6tb1vehxoiw9ky4ufiaw6irc6lb9u73",
    },
    {
      title: "Some content",
      content: "Some content",
      date: 1596887160000,
      id: "vrdp97a6lgskxqrrrgnkt0ttfg7dyvbn",
    },
  ],
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
