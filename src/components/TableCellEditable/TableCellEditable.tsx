import { Input } from '@material-ui/core';
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

  let newValue = label;

  const handleDoubleClick = () => {
    setEditCell(!isEditable);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    newValue = event.target.value;
    dispatch(setJson({ rowID, title, newValue }));
  };

  return (
    <STableCell onDoubleClick={handleDoubleClick}>
      <Input defaultValue={newValue} readOnly={!isEditable} onChange={(e) => handleChangeInput(e)} disableUnderline />
    </STableCell>
  );
};
