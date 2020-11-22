import { Input } from '@material-ui/core';
import debounce from 'lodash/debounce';
import React from 'react';
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
    toggleMenu(ContextMenu({isEditable, anchorEl, inputText, rowID, rowKey}));
  };

  const handleChangeInput = (selectedInputValue: InputType) => {
    editInputText(selectedInputValue);
    data[rowID][rowKey] = selectedInputValue;
    dispatch(modifyData(data));
  };

  const handleChangeDebounce = debounce(handleChangeInput, 300);

  // TODO: Подумать над обновлением в таблице
  return (
    <STableCell>
      <Input
        onDoubleClick={handleDoubleClickMenu}
        onContextMenu={openContextMenu}
        defaultValue={label}
        readOnly={!isEditable}
        onChange={(e) => handleChangeDebounce(getValue(e))}
        disableUnderline={!isEditable}
      />
      {menu}
    </STableCell>
  );
};
