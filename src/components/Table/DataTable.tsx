import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import React from 'react';

import { jsonData, renderLines } from '@components/Table/utils/TableMethods';
import { useStyles, STableRow, STableCell } from '@components/Table/utils/styles';

export const DataTable: React.FC = () => {
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
          <TableHead>
            <STableRow>
              <STableCell>Номер</STableCell>
              <STableCell>Имя</STableCell>
              <STableCell>Возраст</STableCell>
              <STableCell>Средний балл</STableCell>
              <STableCell>Является ли волонтёром</STableCell>
              <STableCell>Любимые дисциплины</STableCell>
              <STableCell>Экзамен</STableCell>
              <STableCell>Оценка по экзамену</STableCell>
              <STableCell>Стипендия</STableCell>
              <STableCell>Курс</STableCell>
              <STableCell>Имеет ли долги</STableCell>
            </STableRow>
          </TableHead>
          <TableBody>{renderLines(page, rowsPerPage)}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={jsonData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
