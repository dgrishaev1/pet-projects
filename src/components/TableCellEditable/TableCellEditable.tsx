import { Input } from '@material-ui/core';
import debounce from 'lodash/debounce';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import ContextMenu from '@components/ContextMenu/ContextMenu';
import { getValue } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';
import { InputType, JsonObjectType } from '@components/Table/utils/types';
import { modifyData } from '@controllers/dataTable/actions';

export const TableCellEditable: React.FC<{
  data: JsonObjectType;
  label: InputType;
  rowID: number;
  rowKey: string;
}> = ({ data, label, rowID, rowKey }) => {
  // TODO: Хуки не дают работать с меню
  const dispatch = useDispatch();
  const [isEditable, setEditCell] = React.useState(false);
  const [inputText, editInputText] = React.useState(label);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menu, toggleMenu] = React.useState<any>(null);

  const handleDoubleClickMenu = () => {
    setEditCell(!isEditable);
  };

  const openContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    toggleMenu(ContextMenu({ isEditable, anchorEl, inputText, rowID, rowKey }));
  };

  const saveInput = useCallback(
    debounce((value) => {
      data[rowID][rowKey] = value;
      dispatch(modifyData(data));
    }, 300),
    [],
  );

  const handleChangeInput = (selectedInputValue: InputType) => {
    editInputText(selectedInputValue);
    saveInput(selectedInputValue);
  };

  // TODO: Подумать над обновлением в таблице
  return (
    <STableCell>
      <Input
        onDoubleClick={handleDoubleClickMenu}
        onContextMenu={openContextMenu}
        value={inputText}
        readOnly={!isEditable}
        onChange={(e) => handleChangeInput(getValue(e))}
        disableUnderline={!isEditable}
      />
      {menu}
    </STableCell>
  );
};
