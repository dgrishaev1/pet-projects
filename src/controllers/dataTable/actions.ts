import { InputType, JsonObjectType } from '@components/Table/utils/types';
import { ActionType } from '@controllers/dataTable/types';

export const modifyData = (payload: {rowID: number, rowKey: string, newValue: InputType}) => ({
  type: ActionType.EDIT_CELL,
  payload
});

export const setJsonTableData = (payload: Array<JsonObjectType>) => ({
  type: ActionType.SET_JSON_TABLE_DATA,
  payload
});