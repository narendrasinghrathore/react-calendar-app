export interface IEventState {
  showDialog: boolean;
  loading: boolean;
  list: IFormState[];
  addEventLoading: boolean;
  viewEventLoading: boolean;
  deleteEventLoading: boolean;
  selectedEvent: IFormState | null;
}

export interface IFormState {
  id: string | number;
  title: string;
  content: string;
  date: number | null;
}
