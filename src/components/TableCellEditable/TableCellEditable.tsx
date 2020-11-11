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
  let newChangedInputValue = label;

  const handleDoubleClick = () => {
    setEditCell(!isEditable);
  };

  const handleChangeInput  = debounce((selectInputValue) => { 
      newChangedInputValue = selectInputValue;
      setTimeout(() => dispatch(setJson({ rowID, title, newChangedInputValue })));
  }, 1000);

  const toggleInput = () => 
    isEditable ? <Input onChange={(e) => handleChangeInput(e.target.value)} /> : newChangedInputValue;

  return (
    <STableCell onDoubleClick={handleDoubleClick}>
      {toggleInput()}
    </STableCell>
  );
};
