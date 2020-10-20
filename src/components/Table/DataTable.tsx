import CheckBox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import React from 'react';

import jsonData from '@components/Table/data.json';

const getStringFromBool = (boolValue: boolean) => boolValue === true? "Да": "Нет";

const useStyles = makeStyles({
  table: {
    minWidth: 800,
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

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="main table">
        <TableHead>
          <STableRow>
            <STableCell><CheckBox /></STableCell>
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
          {
            jsonData.map((value, id: number) => (
              <STableRow key={value.id}>
                <TableCell><CheckBox /></TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.age}</TableCell>
                <TableCell>{value.aScore}</TableCell>
                <TableCell>{getStringFromBool(value.isVolunter)}</TableCell>
                <TableCell>{value.strongSubjects}</TableCell>
                <TableCell>{value.exam}</TableCell>
                <TableCell>{value.eScore}</TableCell>
                <TableCell>{value.grants}</TableCell>
                <TableCell>{value.kurs}</TableCell>
                <TableCell>{getStringFromBool(value.debts)}</TableCell>
              </STableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;