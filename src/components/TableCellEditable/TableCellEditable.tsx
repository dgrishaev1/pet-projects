import { Input } from '@material-ui/core';
import debounce from 'lodash/debounce';
import React from 'react';
import { useDispatch } from 'react-redux';

import { getValue } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';
import { InputType } from '@components/Table/utils/types';
import { setJson } from '@controllers/dataTable/actions';

export const TableCellEditable: React.FC<{ label: InputType; rowID: number; title: string }> = ({
  label,
  rowID,
  title,
}) => {
  const dispatch = useDispatch();
  const [isEditable, setEditCell] = React.useState(false);
  const [cellValue, changeInputValue] = React.useState(label);

  const handleDoubleClick = () => {
    setEditCell(!isEditable);
  };

  const handleChangeInput = (selectedInputValue: InputType) => { 
    //console.log(selectedInputValue);
    changeInputValue(selectedInputValue);
    dispatch(setJson({ rowID, title, newChangedInputValue: selectedInputValue }));
  };

  const handleChangeDebounce = debounce(handleChangeInput, 300);

  return (
    <STableCell onDoubleClick={handleDoubleClick} >
      {isEditable ? <Input defaultValue={cellValue} onChange={(e) => handleChangeDebounce(getValue(e))} /> : cellValue}
    </STableCell>
  );
};
