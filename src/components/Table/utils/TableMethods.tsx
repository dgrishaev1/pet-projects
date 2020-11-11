import React from 'react';

import { STableRow, STableCell } from '@components/Table/utils/styles';
import { JsonDataType, JsonObjectType } from '@components/Table/utils/types';
import { TableCellEditable } from '@components/TableCellEditable/TableCellEditable';

const convertValue = (value: JsonDataType): string => {
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

export const renderBodyLines = (data: JsonObjectType, page: number, rowsPerPage: number): Array<JSX.Element> =>

  // TODO: Строить ячейки как заголовки
  data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: string, rowID: number) => {
    const cellsArray = Object.entries(row).reduce((cells: Array<JSX.Element>, [title, value]) => {
      return [
        ...cells,
        <TableCellEditable key={`cell-${title}`} rowID={rowID} title={title} label={convertValue(value)} />,
      ];
    }, []);

    return <STableRow key={`row-${rowID}`}>{cellsArray}</STableRow>;
  });

export const renderHeadLines = (data: JsonObjectType): JSX.Element => {
  const titlesArray: Array<string> = [];

  // TODO: Упростить
  data.map((row: string) =>
    Object.entries(row).forEach(([title]) => (titlesArray.indexOf(title) === -1 ? titlesArray.push(title) : null)),
  );

  return (
    <STableRow>
      {titlesArray.map((title) => (
        <STableCell key={`cell-${title}`}>{title}</STableCell>
      ))}
    </STableRow>
  );
};
