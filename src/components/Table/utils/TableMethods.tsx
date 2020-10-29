import React from 'react';

import jsonDocument from '@components/Table/data.json';
import { STableRow, STableCell } from '@components/Table/utils/styles';
import { JsonObjectType } from '@components/Table/utils/types';

export const jsonData: Array<JsonObjectType> = jsonDocument;

const [isEditable, setEditCell] = React.useState(false);
const [coords, setCoords] = React.useState<[number, string]>([0, ""]);

const handleDoubleClick = (rowID: number, title: string) => { // При двойном клике по ячейке
    setCoords([rowID, title]);  // Получение номера её строки и названия поля в json
    setEditCell(!isEditable);   // Сделать ячейку изменяемой (пока открываются все ячейки)
    console.log([rowID, title]);  //
};

const handleChangeInput = (event: any) => { // При изменении текста ячейки
    const val = event.target.value; // Получить сам текст
    const row: number = coords[0];  // Номер строки
    const title: string = coords[1]; // Имя поля в json
    jsonData[row][title] = val;
    console.log(jsonData);  // Запись в json по имени поля и номеру записи (строки)
};

const convertValue = (value: JsonObjectType) => {
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

export const renderLines = (page: number, rowsPerPage: number): Array<JSX.Element> => ( // @todo проверку пропусков по количеству ячеек
    jsonData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowID) => {
      const info = Object.entries(row).reduce((info2: Array<JSX.Element>, [title, value]) => {
        info2.push(<STableCell key={`cell-${title}`} onDoubleClick={() => handleDoubleClick(rowID, title)} onChange={(event) => handleChangeInput(event)} contentEditable={isEditable} >{convertValue(value)}</STableCell>);
        return info2;
      }, []);

      return <STableRow key={`row-${rowID}`} >{info}</STableRow>;
    })
);