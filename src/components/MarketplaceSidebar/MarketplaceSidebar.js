import React, { useState } from "react";
import { ListItemIcon, MenuItem, MenuList, Paper } from "@material-ui/core";
import { useStyles } from "./marketplaceSidebarStyles";
import { sidebarMenu } from "../../constant";
import "./MarketplaceSidebar.css";

export default function MarketplaceSidebar() {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const handleClick = (target) => {
    setSelected(target);
  };
  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <MenuList>
          {sidebarMenu.map((menu, index) => (
            <MenuItem
              onClick={() => handleClick(index)}
              selected={selected === index}
              className={classes.list}
            >
              <ListItemIcon className={classes.icons}>
                {menu.icons}
              </ListItemIcon>
              {menu.value}
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </div>
  );
}
