import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import React from 'react';
import { useSelector } from 'react-redux';

import { renderHeadLines, renderBodyLines } from '@components/Table/utils/TableMethods';
import { useStyles } from '@components/Table/utils/styles';
import { getJson } from '@controllers/dataTable/selectors';
import { JsonObjectType } from './utils/types';

const DataTable: React.FC = () => {
  const json: JsonObjectType = useSelector(getJson);

  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer className={classes.container}>
        <Table className={classes.table} size="small" aria-label="sticky table" stickyHeader>
          <TableHead>{renderHeadLines(json)}</TableHead>
          <TableBody>{renderBodyLines(json, page, rowsPerPage)}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={json.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;