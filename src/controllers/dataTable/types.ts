import { JsonObjectType} from '@components/Table/utils/types';

export enum ActionType {
  EDIT_CELL = 'EDIT_CELL',
  SET_JSON_TABLE_DATA = 'SET_JSON_TABLE_DATA',
  SET_JSON_TABLE_VECTOR = 'SET_JSON_TABLE_VECTOR'
}

export type DataTableState = {
  json: Array<JsonObjectType>,
  vector: Array<string>,
}