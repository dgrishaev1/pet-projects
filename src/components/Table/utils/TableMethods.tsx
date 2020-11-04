import React from 'react';

import jsonDocument from '@components/Table/data.json';
import { STableRow, STableCell } from '@components/Table/utils/styles';
import { JsonObjectType } from '@components/Table/utils/types';
import { TableCellEditable } from '@components/TableCellEditable/TableCellEditable';

export const jsonData: Array<JsonObjectType> = jsonDocument;

const convertValue = (value: JsonObjectType) => {
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

  return value;
};

// TODO Даниил: проверку пропусков по количеству ячеек
export const renderBodyLines = (page: number, rowsPerPage: number): Array<JSX.Element> => (
  jsonData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowID) => {
    const cellsArray = Object.entries(row).reduce((cells: Array<JSX.Element>, [title, value]) => {
      return [
        ...cells,
        <TableCellEditable key={`cell-${title}`} rowID={rowID} title={title} label={convertValue(value)} />,
      ];
    }, []);

    return <STableRow key={`row-${rowID}`}>{cellsArray}</STableRow>;
  })
);

export const renderHeadLines = (): React.ReactElement => {
  return (
    <STableRow>
      {
        Object.entries(jsonData[0]).map(([jsonObjectKey], index) => <STableCell key={`cell-${index}`}>{jsonObjectKey}</STableCell>)
      }
    </STableRow>
  );
};


