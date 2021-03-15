import { TreeItem } from '@material-ui/lab';
import isNil from 'lodash/isNil';
import React from 'react';

import { convertValue } from '@components/Table/utils/TableMethods';
import { JsonObjectType } from '@components/Table/utils/types';
import { TreeRow } from '@components/TreeRow/TreeRow';

// todo: типы
const renderSubTree = (
  // слишком много аргументов
  nodeID: string,
  rowKey: string,
  data: JsonObjectType,
  rowID: number,
  value: any,
): JSX.Element => {
  const subtree: Array<JSX.Element> = [];

  if (Array.isArray(value)) {
    value.forEach((elem: any, id: any) => {
      if (!isNil(elem) && typeof elem === 'object') {
        subtree.push(renderSubTree(`${rowKey}-${id}-${elem[0]}`, id, data, rowID, elem)); // todo: elem[0]?
      } else
        subtree.push(
          <TreeRow key={`row-${rowKey}-${id}`} data={data} rowID={rowID} rowKey={id} rowValue={convertValue(elem)} />,
        );
    });
  } else {
    Object.keys(value).forEach((key: string, id) => {
      if (!isNil(value[key]) && typeof value[key] === 'object') {
        subtree.push(renderSubTree(`${key}-${id}`, key, data, rowID, value[key]));
      } else
        subtree.push(<TreeRow key={`row-${key}-${id}`} data={data} rowID={rowID} rowKey={key} rowValue={value[key]} />);
    });
  }

  return (
    <TreeItem key={nodeID} nodeId={nodeID} label={`${rowKey}: ${convertValue(value)}`}>
      {subtree}
    </TreeItem>
  );
};

export const renderTree = (data: JsonObjectType): Array<JSX.Element> =>
  data.map((row: string, rowID: number) => {
    const cellsArray = Object.entries(row).reduce((cells: Array<JSX.Element>, [rowKey, value]) => {
      if (!isNil(value) && typeof value === 'object') {
        return [...cells, renderSubTree(`${rowID}-${rowKey}`, rowKey, data, rowID, value)];
      }
      return [
        ...cells,
        <TreeRow key={`row-${rowKey}`} data={data} rowID={rowID} rowKey={rowKey} rowValue={convertValue(value)} />,
      ];
    }, []);

    return (
      <TreeItem key={`tree-${rowID}`} nodeId={rowID.toString()} label={rowID}>
        {cellsArray}
      </TreeItem>
    );
  });
