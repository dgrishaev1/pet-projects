import { ActionType } from '@controllers/dataTable/types';

export const setJson = (payload: any) => ({
  type: ActionType.EDIT_CELL,
  payload
});
