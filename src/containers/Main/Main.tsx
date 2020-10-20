import React from 'react';

import TopBar from '@components/TopBar/TopBar';
import DataTable from '@components/Table/DataTable';

function Main(): React.ReactElement {
  return (
    <React.Fragment>
      <TopBar />
      <DataTable />
    </React.Fragment>
  );
}

export default Main;