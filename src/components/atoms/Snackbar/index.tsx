import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars: React.FC<{ reason: string; openStatus: boolean }> = (
  props
) => {
  const [open, setOpen] = React.useState(props.openStatus);

  React.useEffect(() => {
    setOpen(props.openStatus);
  }, [props.openStatus]);

  const handleClose = (reason: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => handleClose(props.reason)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key={'topright'}
      >
        <Alert severity="success">{props.reason}</Alert>
      </Snackbar>
    </Stack>
  );
};

export default CustomizedSnackbars;
