import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'inline',
      float: 'left',
    },
    input: {
      display: 'inline',
      width: '60%',
    },
    cell: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }),
);