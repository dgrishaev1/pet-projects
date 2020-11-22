import { Input } from '@material-ui/core';
import debounce from 'lodash/debounce';
import React from 'react';
import { useDispatch } from 'react-redux';

import { getValue } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';
import { InputType, JsonObjectType } from '@components/Table/utils/types';
import { modifyData } from '@controllers/dataTable/actions';

// ------------------------------------------------------------------

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

// --------------------------------------------------------------------

export const TableCellEditable: React.FC<{
  data: JsonObjectType;
  label: InputType;
  rowID: number;
  rowKey: string;
}> = ({ data, label, rowID, rowKey }) => {
  const dispatch = useDispatch();
  const [isEditable, setEditCell] = React.useState(false);
  // const [inputText, editInputText] = React.useState(label);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openDoubleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeInput = (selectedInputValue: InputType) => {
    data[rowID][rowKey] = selectedInputValue;
    dispatch(modifyData(data));
  };

  const handleChangeDebounce = debounce(handleChangeInput, 300);

  // -----------------------------------------------------------------
  
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props: MenuProps) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const toggleChangeValue = () => {
    setAnchorEl(null);
    setEditCell(!isEditable);
  };

  const toggleSaveValue = () => {
    setAnchorEl(null);
    setEditCell(!isEditable);
    dispatch(modifyData({ rowID, rowKey, newValue: inputText}));
  };

  const toggleDeleteValue = () => {
    setAnchorEl(null);
    dispatch(modifyData({ rowID, rowKey, newValue: null }));
    // editInputText("");
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  //--------------------------------------------------------------------------------

  // TODO: Подумать над обновлением в таблице
  return (
    <STableCell>
      <Input
        onDoubleClick={openDoubleClickMenu}
        defaultValue={label}
        readOnly={!isEditable}
        onChange={(e) => handleChangeDebounce(getValue(e))}
        disableUnderline={!isEditable}
      />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={toggleChangeValue} disabled={isEditable}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Редактировать" />
        </StyledMenuItem>
        <StyledMenuItem onClick={toggleSaveValue} disabled={!inputText ? isEditable : !isEditable}> 
          <ListItemIcon>
            <SaveIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Сохранить" />
        </StyledMenuItem>
        <StyledMenuItem onClick={toggleDeleteValue} disabled={Boolean(!inputText || isEditable)}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Удалить" />
        </StyledMenuItem>
      </StyledMenu>
    </STableCell>
  );
};
