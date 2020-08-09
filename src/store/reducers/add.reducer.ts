import { IEventState, IFormState } from "../../models/Events";
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
  ACTION_EVENT_UPDATE_INIT,
  ACTION_EVENT_UPDATE_FAIL,
  ACTION_EVENT_UPDATE_SUCCESS,
  ACTION_EVENT_EDIT_MODE,
  ACTION_EVENT_CREATE_MODE,
} from "../actions/add.action";
const initialState: IEventState = {
  loading: false,
  showDialog: false,
  createMode: false,
  viewMode: false,
  editMode: false,
  addEventLoading: false,
  deleteEventLoading: false,
  viewEventLoading: false,
  editEventLoading: false,
  list: [
    {
      title: "Let add again some event.",
      content: "",
      date: 1597147980000,
      id: "jbte961d4dkb071pc2jedonqzvmlx44c",
    },
    {
      title: "Again some event",
      content: "",
      date: 1597147980000,
      id: "zi30f2arsuarmf648fe9hgyt2cw99bjl",
    },
    {
      title: "Some event AGAIN.",
      content: "",
      date: 1597147980000,
      id: "xk6g7gqwnimfi23j307a2514objyro78",
    },
    {
      title: "Some event on 11 Aug",
      content: "Let see",
      date: 1597147920000,
      id: "mtnguqdrhdhoo2iq5dy40d8lg1q1tfz4",
    },
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
    case ACTION_EVENT_CREATE_MODE: {
      return { ...state, createMode: true, editMode: false, viewMode: false };
    }
    case ACTION_EVENT_HIDE_DIALOG: {
      return {
        ...state,
        showDialog: false,
        editMode: false,
        viewMode: false,
        createMode: false,
        selectedEvent: null
      };
    }
    case ACTION_EVENT_ADD_NEW_INIT: {
      return { ...state, addEventLoading: true };
    }
    case ACTION_EVENT_ADD_NEW_SUCCESS: {
      const { form } = action.payload;
      return { ...state, addEventLoading: false, list: [form, ...state.list] };
    }
    case ACTION_EVENT_ADD_NEW_FAIL: {
      return { ...state, addEventLoading: false };
    }
    case ACTION_EVENT_VIEW_INIT: {
      return { ...state, viewEventLoading: true };
    }
    case ACTION_EVENT_VIEW_SUCCESS: {
      const { id } = action.payload;
      const selectedEvent = state.list.find((item) => item.id === id);
      return {
        ...state,
        selectedEvent: selectedEvent ? selectedEvent : null,
        viewEventLoading: false,
        viewMode: true,
        createMode: false,
        editMode: false,
      };
    }
    case ACTION_EVENT_VIEW_FAIL: {
      return {
        ...state,
        viewEventLoading: false,
        viewMode: false,
        createMode: false,
        editMode: false,
      };
    }
    case ACTION_EVENT_EDIT_MODE: {
      return { ...state, editMode: true, createMode: false, viewMode: false };
    }
    case ACTION_EVENT_UPDATE_INIT: {
      return { ...state, editEventLoading: true };
    }
    case ACTION_EVENT_UPDATE_SUCCESS: {
      const { form }: { form: IFormState } = action.payload;
      const list = [...state.list];
      const itemIndex = list.findIndex((item) => item.id === form.id);
      if (itemIndex !== -1) list[itemIndex] = form;
      return {
        ...state,
        list,
        editEventLoading: false,
        editMode: false,
        viewMode: false,
        createMode: false,
      };
    }
    case ACTION_EVENT_UPDATE_FAIL: {
      return {
        ...state,
        editEventLoading: false,
        editMode: false,
        viewMode: false,
        createMode: false,
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
