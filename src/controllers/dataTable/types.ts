import { JsonObjectType } from '@components/Table/utils/types';

export enum ActionType {
  EDIT_CELL = 'EDIT_CELL'
}

export type EditCellPayloadType = {
  payload: {
    rowID: number,
    title: string,
    newValue: string
  },
}

export type DataTableState = {
  json: Array<JsonObjectType>,
}