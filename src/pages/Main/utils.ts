import { flattenDeep, uniq } from 'lodash';

import { JsonObjectType } from '@components/Table/utils/types';
// TODO: на уровне компонента Main получить и передать в normalizeJsonData (data, vector)
export const normalizeVector = (data: Array<JsonObjectType>): JsonObjectType => {
  const vector: JsonObjectType = {};

  const arrayData = data.map((row: JsonObjectType) => Object.keys(row));

  const uniqueFields = uniq(flattenDeep(arrayData));
  uniqueFields.forEach((field: string) => {
    vector[field] = null;
  });

  return vector;
};

export const normalizeJsonData = (data: Array<JsonObjectType>): Array<JsonObjectType> => {
  const dataVector = normalizeVector(data);
  return data.map((row) => ({...dataVector, ...row}));
};
