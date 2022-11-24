import React, { ReactElement } from 'react';

import { Grid } from '@mui/material';

const BasicTemplate: React.FC<{
  header: ReactElement;
  body: ReactElement;
  footer: ReactElement;
}> = (props): ReactElement => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {props.header}{' '}
        </Grid>
        <Grid item container xs alignContent="flex-start" spacing={2}>
          <Grid xs={2} />
          <Grid item xs={8}>
            {props.body}{' '}
          </Grid>
          <Grid xs={2} />
        </Grid>
        <Grid item xs={12}>
          {props.footer}{' '}
        </Grid>
      </Grid>
    </div>
  );
};

export default BasicTemplate;
