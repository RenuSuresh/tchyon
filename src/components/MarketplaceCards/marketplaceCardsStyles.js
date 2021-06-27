import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: "0 20px 40px 20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paperContent: {
    backgroundColor: "#d4f8d4",
  },
  starPaper: {
    width: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#45ac45",
  },
  star: {
    color: "white",
  },
  rating: {
    fontWeight: 600,
    color: "white",
  },
  upvote: {
    fontSize: 10,
  },
  upvoteIcon: {
    fontSize: "3em",
    marginBottom: -10,
  },
  smallTypo: {
    fontSize: "0.8em",
  },
  smallTypoValue: {
    fontWeight: 600,
  },
  name: {
    fontWeight: 600,
    fontSize: "1em",
    textAlign: "left",
    marginTop: "0.8em",
  },
  details: {
    textAlign: "left",
    marginTop: "0.8em",
  },
});
