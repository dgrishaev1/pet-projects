import { handleActions } from 'redux-actions';

import jsonDocument from '@components/Table/data.json';
import { ActionType, DataTableState, EditCellPayloadType } from '@controllers/dataTable/types';

const initialState: DataTableState = {
  json: jsonDocument,
};

export const dataTable = handleActions(
  {
    [ActionType.EDIT_CELL]: (state: DataTableState, { payload: { rowID, rowKey, newValue } }: EditCellPayloadType) => {
      const ret = {...state};
      console.log('Old:',ret.json[rowID]);
      ret.json[rowID][rowKey] = newValue;
      console.log('New:',ret.json[rowID]);
      return ret;
    },
  },
  initialState,
);
