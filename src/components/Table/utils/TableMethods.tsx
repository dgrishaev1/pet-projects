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

export const renderBodyLines = (data: JsonObjectType, page: number, rowsPerPage: number): Array<JSX.Element> => (
  data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: string, rowID: number) => {
    const cellsArray = Object.entries(row).reduce((cells: Array<JSX.Element>, [title, value]) => {
      return [
        ...cells,
        <TableCellEditable key={`cell-${title}`} rowID={rowID} title={title} label={convertValue(value)} />,
      ];
    }, []);

    return <STableRow key={`row-${rowID}`}>{cellsArray}</STableRow>;
  })
);

export const renderHeadLines = (data: JsonDataType): React.ReactElement => {
  return (
    <STableRow>
      {
        Object.entries(data).map(([jsonObjectKey], index) => <STableCell key={`cell-${index}`}>{jsonObjectKey}</STableCell>)
      }
    </STableRow>
  );
};


