export interface IEventState {
  showDialog: boolean;
  loading: boolean;
  list: IFormState[];
  addEventLoading: boolean;
  viewEventLoading: boolean;
  editEventLoading: boolean;
  deleteEventLoading: boolean;
  selectedEvent: IFormState | null;
  createMode: boolean;
  viewMode: boolean;
  editMode: boolean;
}

export interface IFormState {
  id: string | number;
  title: string;
  content: string | undefined;
  date: number;
}
/**
 * Event modes to use when we click on
 * any event, to view/create/edit an event.
 */
export enum EventMode {
  createMode,
  viewMode,
  editMode,
}
