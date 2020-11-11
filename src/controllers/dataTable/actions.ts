import { ActionType } from '@controllers/dataTable/types';

// TODO: Переименовать функцию (modifyData)
export const setJson = (payload: any) => ({
  type: ActionType.EDIT_CELL,
  payload
});
