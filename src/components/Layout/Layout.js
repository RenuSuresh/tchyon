import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Layout.css";
import { useStyles } from "./layoutStyles";
import Banner from "../Banner/Banner";
import Searchbar from "../Searchbar/Searchbar";
import MarketplaceContent from "../MarketplaceContent/MarketplaceContent";

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Tchyon
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Banner />
        <div className="layout-outer">
          <div className="layout-mainContent">
            <Searchbar />
            <MarketplaceContent />
          </div>
        </div>
      </main>
    </div>
  );
}
