/**
 * Interface for AddEvent Component
 */
export interface IAddEventComponent {
  /**
   * If true, allow to view and delete event.
   */
  viewMode: boolean;
  /**
   * If true, allow to view and edit event.
   */
  editMode: boolean;
  /**
   * If true, allow to add new event.
   */
  createMode: boolean;
}
