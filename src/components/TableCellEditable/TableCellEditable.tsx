import React, { useEffect } from 'react';

import { jsonData } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';
import { Input } from '@material-ui/core';

export const TableCellEditable: React.FC<{ label: string; rowID: number; title: string }> = ({
  label,
  rowID,
  title,
}) => {
  const [isEditable, setEditCell] = React.useState(false);
  const [testValue, setTestValue] = React.useState('');

  useEffect(() => {
    setTestValue(label);
  }, [label]);

  const handleDoubleClick = (event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
    setEditCell(!isEditable);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    jsonData[rowID][title] = event.target.value;
    setTestValue(event.target.value);
  };

  return (
    <STableCell onDoubleClick={handleDoubleClick}>
      <Input value={testValue} onChange={(e) => handleChangeInput(e)} />
    </STableCell>
  );
};
