import { cloneDeep } from 'lodash';
import { handleActions } from 'redux-actions';

import jsonDocument from '@components/Table/data.json';
import { JsonObjectType } from '@components/Table/utils/types';
import { ActionType, DataTableState } from '@controllers/dataTable/types';

const initialState: DataTableState = {
  json: jsonDocument,
  vector: [],
};

export const dataTable = handleActions(
  {
    [ActionType.EDIT_CELL]: (state: DataTableState, { payload }: JsonObjectType) => ({
      ...state,
      json: cloneDeep(payload),
    }),
    [ActionType.SET_JSON_TABLE_DATA]: (state: DataTableState, { payload }: JsonObjectType) => ({
      ...state,
      json: payload,
    }),
    [ActionType.SET_JSON_TABLE_VECTOR]: (state: DataTableState, { payload }: JsonObjectType) => ({
      ...state,
      vector: payload,
    }),
  },
  initialState,
);
