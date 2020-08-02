import { IEventState } from "../../models/Events";
import {
  ACTION_EVENT_HIDE_DIALOG,
  ACTION_EVENT_SHOW_DIALOG,
} from "../actions/add.action";
const initialState: IEventState = {
  loading: false,
  showDialog: false,
  form: {
    content: "",
    date: 0,
    title: "",
  },
};
const event = (state = initialState || undefined, action: any): IEventState => {
  switch (action.type) {
    case ACTION_EVENT_SHOW_DIALOG: {
      return { ...state, showDialog: true };
    }
    case ACTION_EVENT_HIDE_DIALOG: {
      return { ...state, showDialog: false };
    }

    default: {
      return { ...state };
    }
  }
};

export { event };
