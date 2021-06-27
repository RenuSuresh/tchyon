import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./searchbarStyles";

function Searchbar() {
  const classes = useStyles();
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        className={classes.searchbar}
      />
    </div>
  );
}

export default Searchbar;
