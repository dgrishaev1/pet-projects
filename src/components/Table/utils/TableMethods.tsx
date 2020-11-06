import React from 'react';

import jsonDocument from '@components/Table/data.json';
import { STableRow } from '@components/Table/utils/styles';
import { JsonObjectType } from '@components/Table/utils/types';
import { TableCellEditable } from '@components/TableCellEditable/TableCellEditable';

export const jsonData: Array<JsonObjectType> = jsonDocument;

const convertValue = (value: JsonObjectType): string => {
  if (Array.isArray(value)) {
    return '[array]';
  }

  const type = typeof value;
  if (type === 'object') {
    return '[object]';
  }
  if (type === 'boolean') {
    return value ? 'Да' : 'Нет';
  }

  return value.toString();
};

// TODO Даниил: проверку пропусков по количеству ячеек
export const renderLines = (page: number, rowsPerPage: number): Array<JSX.Element> =>
  jsonData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowID) => {
    const info = Object.entries(row).reduce((cells: Array<JSX.Element>, [title, value]) => {
      return [
        ...cells,
        <TableCellEditable key={`cell-${title}`} rowID={rowID} title={title} label={convertValue(value)} />,
      ];
    }, []);

    return <STableRow key={`row-${rowID}`}>{info}</STableRow>;
  });
