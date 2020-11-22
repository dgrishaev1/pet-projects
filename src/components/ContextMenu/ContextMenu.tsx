import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { useDispatch } from 'react-redux';

import {StyledMenu, StyledMenuItem} from '@components/ContextMenu/styles';
import { InputType } from '@components/Table/utils/types';
import { modifyData } from '@controllers/dataTable/actions';

const ContextMenu: React.FC<{isEditable: boolean, anchorEl: null | HTMLElement, inputText: InputType, rowID: number, rowKey: string}> = ({
  isEditable, 
  anchorEl, 
  inputText,
  rowID,
  rowKey
}) => {

  const dispatch = useDispatch();
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(anchorEl);
  const [isLaunched, setLaunch] = React.useState(isEditable);

  const toggleChangeValue = () => {
    setAnchor(null);
    setLaunch(!isLaunched);
  };

  const toggleSaveValue = () => {
    setAnchor(null);
    setLaunch(!isLaunched);
    dispatch(modifyData({ rowID, rowKey, newValue: inputText}));
  };

  const toggleDeleteValue = () => {
    setAnchor(null);
    dispatch(modifyData({ rowID, rowKey, newValue: null }));
    // editInputText("");
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <StyledMenu
        id="customized-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
    >
      <StyledMenuItem onClick={toggleChangeValue} disabled={isLaunched}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Редактировать" />
      </StyledMenuItem>
      <StyledMenuItem onClick={toggleSaveValue} disabled={!inputText ? isLaunched : !isLaunched}> 
        <ListItemIcon>
          <SaveIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Сохранить" />
      </StyledMenuItem>
      <StyledMenuItem onClick={toggleDeleteValue} disabled={Boolean(!inputText || isLaunched)}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Удалить" />
      </StyledMenuItem>
    </StyledMenu>
  );
};

export default ContextMenu;
