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
import { JsonDataType } from '@components/Table/utils/types';

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
  container: {
    maxHeight: 700,
  },
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
      backgroundColor: '#CBC8D1',
      color: '#5D5B60',
      fontWeight: theme.typography.fontWeightBold,
      minWidth: 100,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

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

  const convertValue = (value: JsonDataType) => {
    if (Array.isArray(value)) {
      return '[array]';
    }

    const type = typeof value;
    if (type === 'object') {
      return '[object]';
    }
    if (type === 'boolean') {
      return value ? 'Да' : 'Нет';
    }

    return value;
  };

  const renderLines = (): Array<JSX.Element> => // @todo проверку пропусков по количеству ячеек
    jsonData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rows, rowId) => {
      const info = Object.entries(rows).reduce((info2: Array<JSX.Element>, [key, value]) => {
        info2.push(<TableCell key={`cell-${key}`}>{convertValue(value)}</TableCell>);
        return info2;
      }, []);

      return <STableRow key={`row-${rowId}`}>{info}</STableRow>;
    });

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
          <TableBody>{renderLines()}</TableBody>
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
