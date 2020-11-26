import { Input } from '@material-ui/core';
import debounce from 'lodash/debounce';
import React from 'react';
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
  const [controls, setControls] = React.useState<ControlsObjectType>({isInputEditable: false});

  const handleDoubleClickMenu = () => {
    setControls({isInputEditable: !isEditable});
    setEditCell(!isEditable);
  };

  const handleChangeInput = (selectedInputValue: InputType) => {
    data[rowID][rowKey] = selectedInputValue;
    dispatch(modifyData(data));
  };

  const handleChangeDebounce = debounce(handleChangeInput, 300);

  const showDeleteButton = () => {
    // dispatch(setTableControlsState(controls));
    return label ? <DeleteButton isEditable={isEditable} data={data} rowID={rowID} rowKey={rowKey} /> : null; 
  };

  return (
    <STableCell>
      <div className={classes.cell}>
        {/* {showDeleteButton()} */}
        <DeleteButton isEditable={isEditable} data={data} rowID={rowID} rowKey={rowKey} />
        <Input className={classes.input}
          onDoubleClick={handleDoubleClickMenu}
          defaultValue={label}
          readOnly={!isEditable}
          onChange={(e) => handleChangeDebounce(getValue(e))}
          disableUnderline={!isEditable}
        />
      </div>
    </STableCell>
  );
};
