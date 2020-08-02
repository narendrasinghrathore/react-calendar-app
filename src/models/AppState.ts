import { IEventState } from "./Events";

export interface IAppState {
  month: IMonthState;
  event: IEventState;
}

export interface WeekName {
  alias: string;
  name: string;
}

export interface IMonthState {
  totalNumberOfDays: number;
  weekNames: WeekName[];
  selectedDate: string;
  visible: boolean;
  showDialog: boolean;
}
