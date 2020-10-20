import React from 'react';

import TopBar from '@components/TopBar/TopBar';
import DataTable from '@components/Table/DataTable';

function Main(): React.ReactElement {
  return(
    <div>
      <TopBar />
      <DataTable />
    </div>
  );
}

export default Main;