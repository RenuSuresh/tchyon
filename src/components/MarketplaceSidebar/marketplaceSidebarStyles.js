import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
    width: 300,
    height: 400,
  },
  list: {
    height: 52,
    "&:hover": {
      backgroundColor: "#eeeefe",
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#e8e8ff",
      borderRight: "3px solid",
    },
  },
  icons: {
    color: "#12193b",
    fontSize: "1.75em",
  },
}));
