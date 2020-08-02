export interface IEventState {
  showDialog: boolean;
  loading: boolean;
  form: IFormState;
}

export interface IFormState {
  title: string;
  content: string;
  date: number | null;
}
