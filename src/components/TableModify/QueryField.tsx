
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import alasql from 'alasql';
import { keys } from 'lodash';
import React from 'react';
import { useDispatch } from 'react-redux';

import json from '@components/Table/data.json';
import { JsonObjectType } from '@components/Table/utils/types';
import { useStyles } from '@containers/TopBar/styles';
import { setJsonTableData, setJsonTableVector } from '@controllers/dataTable/actions';
import { normalizeVector, normalizeJsonData } from '@pages/Main/utils';

export const QueryField: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [query, setQuery] = React.useState('SELECT * FROM ?');

    const getValue = (e: React.SyntheticEvent): string => {
        const target = e.target as HTMLInputElement;
      
        return target.value.toString();
    };
      
    const execQuery = () => {
        const sqlQuery: Array<JsonObjectType> = alasql(query, [json]);

        const dataVector: JsonObjectType = normalizeVector(sqlQuery);
        dispatch(setJsonTableVector(keys(dataVector)));

        const normalizeData: Array<JsonObjectType> = normalizeJsonData(sqlQuery, dataVector);
        dispatch(setJsonTableData(normalizeData));
        };

    const handleChangeQuery = (value: string) => {
        setQuery(value);
    };

    return (
        <div className={classes.content}>
            <InputBase
                className={classes.inputQuery}
                placeholder="Введите запрос"
                value={query}
                onChange={(e) => handleChangeQuery(getValue(e))}
            />
            <Button 
                variant="outlined" 
                color="default" 
                aria-label="df"
                className={classes.queryButton} 
                onClick={() => execQuery()} 
            >
                Выполнить
            </Button>
        </div>
    );
};