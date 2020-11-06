import Input from '@material-ui/core/Input';
import React, { useEffect } from 'react';

import { jsonData } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';

export const TableCellEditable: React.FC<{ label: string; rowID: number; title: string }> = ({
  label,
  rowID,
  title,
}) => {

  const [isEditable, setEditCell] = React.useState(false);
  const [newInputValue, setNewInputValue] = React.useState();

  const toggleCellInput = () => isEditable ? <Input onChange={(e: any) => setNewInputValue(e.target.value)} value={label} /> : label;

  useEffect(() => {
    console.log(newInputValue);
  }, [newInputValue]);


  const handleDoubleClick = () => {
    setEditCell(!isEditable);
  };

  return (
    <STableCell onDoubleClick={handleDoubleClick} >
      {toggleCellInput()}
    </STableCell>
  );
};
