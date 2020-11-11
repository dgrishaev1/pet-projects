import { Input } from '@material-ui/core';
import debounce from 'lodash/debounce';
import React from 'react';
import { useDispatch } from 'react-redux';

import { STableCell } from '@components/Table/utils/styles';
import { setJson } from '@controllers/dataTable/actions';

export const TableCellEditable: React.FC<{ label: string; rowID: number; title: string }> = ({
  label,
  rowID,
  title,
}) => {
  const dispatch = useDispatch();
  const [isEditable, setEditCell] = React.useState(false);
  //let newChangedInputValue = label;

  const handleDoubleClick = () => {
    setEditCell(!isEditable);
  };

  // TODO: Поправить any
  const handleChangeInput = (selectedInputValue: any) => { 
    // newChangedInputValue = selectedInputValue;
    console.log(selectedInputValue);
    dispatch(setJson({ rowID, title, newChangedInputValue: selectedInputValue }));
  };

  const handleChangeDebounce = debounce(handleChangeInput, 300);

  //const toggleInput = () => 
    //isEditable ? <Input onChange={(e) => handleChangeDebounce(e.target.value)} /> : newChangedInputValue;

  return (
    <STableCell onDoubleClick={handleDoubleClick}>
      {isEditable ? <Input onChange={(e) => handleChangeDebounce(e.target.value)} /> : label}
    </STableCell>
  );
};
