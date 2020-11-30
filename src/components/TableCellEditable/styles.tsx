import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
    },
    input: {
      width: 'auto',
      margin: 5,
      backgroundColor: '#CBC8D1',
      outline: 'none'
    },
    cell: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      padding: 5,
      minHeight: 50
    }
  }),
);