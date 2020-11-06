import Input from '@material-ui/core/Input';
import React, { useEffect } from 'react';

import { jsonData } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';
import { JsonObjectType } from '@components/Table/utils/types';

export const TableCellEditable: React.FC<{ label: string | JsonObjectType; rowID: number; title: string }> = ({
  label,
  rowID,
  title,
}) => {
  const [isEditable, setEditCell] = React.useState(false);
  const [newInputValue, setNewInputValue] = React.useState();

  useEffect(() => {
    console.log(newInputValue);
  }, [newInputValue]);


  const handleDoubleClick = () => {
    setEditCell(!isEditable);
    //console.log([rowID, title]);
  };

  /*const handleChangeInput = (event: any) => { // React.FormEvent<HTMLTableDataCellElement>
    // console.log(event);
    // console.log(jsonData);
    const val = event.target.value;
    jsonData[rowID][title] = val;
    console.log(jsonData);
  };*/


  const toggleCellInput = () => isEditable ? <Input onChange={(e: any) => setNewInputValue(e.target.value)} value={label} /> : label;

  return (
    <STableCell onDoubleClick={handleDoubleClick} >
      {toggleCellInput()}
    </STableCell>
  );
};
