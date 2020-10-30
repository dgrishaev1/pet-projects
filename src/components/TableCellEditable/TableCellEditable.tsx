import React from 'react';
import { jsonData } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';
import { JsonObjectType } from '@components/Table/utils/types';

export const TableCellEditable: React.FC<{ label: string | JsonObjectType; rowID: number; title: string }> = ({
  label,
  rowID,
  title,
}) => {
  const [isEditable, setEditCell] = React.useState(false);

  const handleDoubleClick = (event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
    setEditCell(!isEditable);
    console.log([rowID, title]);
  };

  const handleChangeInput = (event: React.FormEvent<HTMLTableDataCellElement>) => {
    // console.log(event);
    // console.log(jsonData);
    // const val = event.target.value;
    jsonData[rowID][title] = 'val';
  };

  return (
    <STableCell onDoubleClick={handleDoubleClick} onChange={(e) => handleChangeInput(e)} contentEditable={isEditable}>
      {label}
    </STableCell>
  );
};
