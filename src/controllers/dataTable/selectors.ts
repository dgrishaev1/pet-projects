import { createSelector } from 'reselect';

import { State } from '@controllers/type';

export const dataTableState = ({ dataTable }: State) => dataTable;

// TODO: Переименовать json
export const getJson = createSelector(dataTableState, ({ json }) => json);
