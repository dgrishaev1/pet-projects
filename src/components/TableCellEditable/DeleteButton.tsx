import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from '@components/TableCellEditable/styles';
import { ControlsObjectType, JsonObjectType } from '@components/Table/utils/types';
import { modifyData } from '@controllers/dataTable/actions';
import { getControls } from '@controllers/dataTable/selectors';


export const DeleteButton: React.FC<{isEditable: boolean, data: JsonObjectType, rowID: number, rowKey: string}> = ({
  isEditable,
  data,
  rowID,
  rowKey
}) => {

  const dispatch = useDispatch();
  const controls: ControlsObjectType = useSelector(getControls);
  const classes = useStyles();

  const deleteValue = () => {
    data[rowID][rowKey] = null;
    dispatch(modifyData(data));
  };

  return (
    <IconButton onClick={deleteValue} aria-label="delete" className={classes.button} disabled={Boolean(controls.isInputEditable)} >
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
};


