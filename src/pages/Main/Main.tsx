import { keys } from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DataTable from '@components/Table/DataTable';
import { TopBar } from '@containers/TopBar/TopBar';
import { setJsonTableVector, setJsonTableData } from '@controllers/dataTable/actions';
import { getData } from '@controllers/dataTable/selectors';
import { normalizeJsonData, normalizeVector } from '@pages/Main/utils';

function Main(): React.ReactElement {
  const dispatch = useDispatch();
  const json = useSelector(getData);

  const [isNormalized, setNormalized] = React.useState(false);

  useEffect(() => {
    const dataVector = normalizeVector(json);
    dispatch(setJsonTableVector(keys(dataVector)));
    const normalizeData = normalizeJsonData(json, dataVector);
    dispatch(setJsonTableData(normalizeData));
    setNormalized(true);
  }, []);

  return (
    <>
      <TopBar />
      {isNormalized && <DataTable />}
    </>
  );
}

export default Main;
