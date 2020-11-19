import { JsonObjectType, InputType} from '@components/Table/utils/types';

export enum ActionType {
  EDIT_CELL = 'EDIT_CELL',
  SET_JSON_TABLE_DATA = 'SET_JSON_TABLE_DATA'
}

export type EditCellPayloadType = {
  payload: {
    rowID: number,
    rowKey: string,
    newValue: InputType,
  },
}

export type DataTableState = {
  json: Array<JsonObjectType>,
}