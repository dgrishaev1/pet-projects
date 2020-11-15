import { Input } from '@material-ui/core';
import debounce from 'lodash/debounce';
import React from 'react';
import { useDispatch } from 'react-redux';

import { getValue } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';
import { InputType } from '@components/Table/utils/types';
import { modifyData } from '@controllers/dataTable/actions';

export const TableCellEditable: React.FC<{ label: InputType; rowID: number; rowKey: string }> = ({
  label,
  rowID,
  rowKey,
}) => {
  const dispatch = useDispatch();
  const [isEditable, setEditCell] = React.useState(false);

  const handleDoubleClick = () => {
    setEditCell(!isEditable);
  };

  const handleChangeInput = (selectedInputValue: InputType) => {
    dispatch(modifyData({ rowID, rowKey, newValue: selectedInputValue }));
  };

  const handleChangeDebounce = debounce(handleChangeInput, 300);

  return (
    <STableCell onDoubleClick={handleDoubleClick}>
      <Input
        defaultValue={label}
        readOnly={!isEditable}
        onChange={(e) => handleChangeDebounce(getValue(e))}
        disableUnderline
      />
    </STableCell>
  );
};