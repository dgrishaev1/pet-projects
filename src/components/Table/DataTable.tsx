import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';

import jsonData from '@components/Table/data.json';

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
  container: {
    maxHeight: 700,
  }
});

const STableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const STableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#CBC8D1",
      color: "#5D5B60",
      fontWeight: theme.typography.fontWeightBold,
      minWidth: 100
    },
    body: {
      fontSize: 14
    },
  }),
)(TableCell);

function DataTable(): React.ReactElement {
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

  const convertValue = (value: any) => {
    switch(typeof(value)) {
      case 'object':
        return '[object]'
      case 'function':
        return '[function]'
      default:
        return value.toString()
    }
  }

  const renderLines = () => (
    jsonData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rows, rowId) => {
      let info: object[] = []

      Object.values(rows).forEach((value, cellId) => (
        info.push(( // @todo проверку пропусков по количеству ячеек
          <TableCell key={'cell-' + cellId}>
            {convertValue(value)}
          </TableCell>
        ))
      ))

      return (
        <STableRow key={'row-' + rowId}>
          {info}
        </STableRow>
      )
    })
  )

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
          <TableBody>
                {renderLines()}
          </TableBody>
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
}

export default DataTable;