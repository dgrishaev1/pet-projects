import { JsonObjectType, InputType} from '@components/Table/utils/types';

export enum ActionType {
  EDIT_CELL = 'EDIT_CELL'
}

export type EditCellPayloadType = {
  payload: {
    rowID: number,
    title: string,
    newChangedInputValue: InputType,
  },
}

export type DataTableState = {
  json: Array<JsonObjectType>,
}