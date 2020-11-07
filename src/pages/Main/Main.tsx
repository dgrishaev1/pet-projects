import React from 'react';

import { TopBar } from '@containers/TopBar/TopBar';
import DataTable from '@components/Table/DataTable';

function Main(): React.ReactElement {
  return (
    <>
      <TopBar />
      <DataTable />
    </>
  );
}

export default Main;
