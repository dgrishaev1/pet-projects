import React from 'react';

import { DataTable } from '@components/Table/DataTable';
import { TopBar } from '@containers/TopBar/TopBar';

function Main(): React.ReactElement {
  return (
    <>
      <TopBar />
      <DataTable />
    </>
  );
}

export default Main;
