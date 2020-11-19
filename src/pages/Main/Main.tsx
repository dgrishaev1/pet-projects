import React, { useEffect } from 'react';

import { TopBar } from '@containers/TopBar/TopBar';
import DataTable from '@components/Table/DataTable';
import { JsonObjectType } from '@components/Table/utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '@controllers/dataTable/selectors';
import { normalizeJsonData } from '@pages/Main/utils';
import { setJsonTableData } from '@controllers/dataTable/actions';

function Main(): React.ReactElement {
  // setJsonTableData
  const dispatch = useDispatch();
  const json = useSelector(getData);
  const [isNormalized, setNormalized] = React.useState(false);

  useEffect(() => {
    const normalizeData = normalizeJsonData(json);
    dispatch(setJsonTableData(normalizeData));
    // TODO: написать редьюсер который хранит хедеры
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
