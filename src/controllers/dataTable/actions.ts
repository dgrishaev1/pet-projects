import { ActionType } from '@controllers/dataTable/types';
import { InputType } from '@components/Table/utils/types';

export const modifyData = (payload: {rowID: number, rowKey: string, newValue: InputType}) => ({
  type: ActionType.EDIT_CELL,
  payload
});
