import { Input } from '@material-ui/core';
import debounce from 'lodash/debounce';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getValue } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';
import { ControlsObjectType, InputType, JsonObjectType } from '@components/Table/utils/types';
import { DeleteButton } from '@components/TableCellEditable/DeleteButton';
import { useStyles } from '@components/TableCellEditable/styles';
import { modifyData, setTableControlsState } from '@controllers/dataTable/actions';

export const TableCellEditable: React.FC<{
  data: JsonObjectType;
  label: InputType;
  rowID: number;
  rowKey: string;
}> = ({ data, label, rowID, rowKey }) => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const [isEditable, setEditCell] = React.useState(false);
  const [inputText, editInputText] = React.useState(label);
  const [controls, setControls] = React.useState<ControlsObjectType>({isInputEditable: false});

  const handleDoubleClickMenu = () => {
    setControls({isInputEditable: !isEditable});
    setEditCell(!isEditable);
  };

  const showDeleteButton = () => {
    // dispatch(setTableControlsState(controls));
    return label ? <DeleteButton isEditable={isEditable} data={data} rowID={rowID} rowKey={rowKey} /> : null; 
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
      <div className={classes.cell}>
        <Input className={classes.input}
          onDoubleClick={handleDoubleClickMenu}
          defaultValue={label}
          value={inputText}
          readOnly={!isEditable}
          onChange={(e) => handleChangeInput(getValue(e))}
          disableUnderline={!isEditable}
        />
      </div>
    </STableCell>
  );
};
