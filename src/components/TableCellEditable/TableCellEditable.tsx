import TextField from '@material-ui/core/TextField';
import debounce from 'lodash/debounce';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getValue } from '@components/Table/utils/TableMethods';
import { STableCell } from '@components/Table/utils/styles';
import { InputType, JsonObjectType } from '@components/Table/utils/types';
import { DeleteButton } from '@components/TableCellEditable/DeleteButton';
import { useStyles } from '@components/TableCellEditable/styles';
import { modifyData } from '@controllers/dataTable/actions';

export const TableCellEditable: React.FC<{
  data: JsonObjectType;
  cellText: InputType;
  rowID: number;
  rowKey: string;
}> = ({ data, cellText, rowID, rowKey }) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [isEditable, setEditCell] = React.useState(false);
  const [inputText, setInputText] = React.useState(cellText);

  useEffect(() => {
    setInputText(cellText);
  }, [cellText]);

  const handleDoubleClickMenu = () => {
    setEditCell(!isEditable);
  };

  const saveInput = useCallback(
    debounce((value) => {
      data[rowID][rowKey] = value;
      dispatch(modifyData(data));
    }, 300),
    [],
  );

  const handleChangeInput = (selectedInputValue: InputType) => {
    setInputText(selectedInputValue);
    saveInput(selectedInputValue);
  };

  return (
    <STableCell>
      <div className={classes.cell}>
        <TextField className={classes.input}
          multiline
          variant="outlined"
          onDoubleClick={handleDoubleClickMenu}
          value={inputText}
          disabled={!isEditable}
          onChange={(e) => handleChangeInput(getValue(e))}
          size="small"
        />
        { 
          inputText && 
          <DeleteButton 
            isEditable={isEditable} 
            data={data} 
            rowID={rowID} 
            rowKey={rowKey} 
          /> 
        }
      </div>
    </STableCell>
  );
};
