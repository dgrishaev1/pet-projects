import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeView from '@material-ui/lab/TreeView';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { renderTree } from '@components/Tree/utils/TableMethods';
import { JsonObjectType } from '@components/Tree/utils/types';
import { InputType } from '@components/Table/utils/types';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    // maxWidth: 350,
  },
});

const Tree: React.FC<{ json: any }> = ({ json }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [tableData, setTableData] = React.useState<Array<JsonObjectType>>([]);

  useEffect(() => {
    setTableData(json);
  }, [dispatch, json]);

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(tableData)}
    </TreeView>
  );
};

export default Tree;
