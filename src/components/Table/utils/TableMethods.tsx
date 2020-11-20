import React from 'react';

import { STableRow, STableCell } from '@components/Table/utils/styles';
import { JsonDataType, JsonObjectType, InputType } from '@components/Table/utils/types';
import { TableCellEditable } from '@components/TableCellEditable/TableCellEditable';

const convertValue = (value: JsonDataType): string => {
  if (value === null) {
    return '';
  }

  const type = typeof value;

  if (type === 'object') {
    return '[object]';
  }
  if (type === 'boolean') {
    return value ? 'Да' : 'Нет';
  }

  if (Array.isArray(value)) {
    return '[array]';
  }

  return value.toString();
};

export const renderBodyLines = (data: JsonObjectType, page: number, rowsPerPage: number): Array<JSX.Element> =>
  data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: string, rowID: number) => {
    const cellsArray = Object.entries(row).reduce((cells: Array<JSX.Element>, [rowKey, value]) => {
      return [
        ...cells,
        <TableCellEditable
          key={`cell-${page}-${rowKey}`}
          data={data}
          rowID={rowID}
          rowKey={rowKey}
          label={convertValue(value)}
        />,
      ];
    }, []);

    return <STableRow key={`row-${rowID}`}>{cellsArray}</STableRow>;
  });

export const renderHeadLines = (data: Array<string>): JSX.Element => (
  <STableRow>
    {data.map((title) => (
      <STableCell key={`cell-${title}`}>{title}</STableCell>
    ))}
  </STableRow>
);

export const getValue = (e: React.SyntheticEvent): InputType => {
  const target = e.target as HTMLInputElement;

  return +target.value || target.value;
};
