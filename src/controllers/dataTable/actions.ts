import { JsonObjectType } from '@components/Table/utils/types';
import { ActionType } from '@controllers/dataTable/types';

export const modifyData = (payload: JsonObjectType) => ({
  type: ActionType.EDIT_CELL,
  payload
});

export const setJsonTableData = (payload: Array<JsonObjectType>) => ({
  type: ActionType.SET_JSON_TABLE_DATA,
  payload
});

export const setJsonTableVector = (payload: Array<string>) => ({
  type: ActionType.SET_JSON_TABLE_VECTOR,
  payload
});