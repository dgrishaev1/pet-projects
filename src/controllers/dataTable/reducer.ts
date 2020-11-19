import { handleActions } from 'redux-actions';

import jsonDocument from '@components/Table/data.json';
import { ActionType, DataTableState, EditCellPayloadType } from '@controllers/dataTable/types';
import { JsonObjectType } from '@components/Table/utils/types';

const initialState: DataTableState = {
  json: jsonDocument,
};

export const dataTable = handleActions(
  {
    [ActionType.EDIT_CELL]: (state: DataTableState, { payload: { rowID, rowKey, newValue } }: EditCellPayloadType) => {
      // TODO: пофиксить, вынести из reducer'а
      const ret = { ...state };
      ret.json[rowID][rowKey] = newValue;
      return ret;
    },
    [ActionType.SET_JSON_TABLE_DATA]: (state: DataTableState, { payload }: any) => ({
      ...state,
      json: payload,
    }),
  },
  initialState,
);
