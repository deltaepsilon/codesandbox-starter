import React from 'react';
import { connect } from 'unistore/react';
import { NavLink } from 'react-router-dom';
import { Drawer, DrawerHeader, DrawerContent } from 'rmwc/Drawer';
import { actions } from '../../store';

import { Button } from 'rmwc/Button';

import { ListItem, ListItemText } from 'rmwc/List';

import css from "./drawer.css";

export default connect('drawerOpen,location', actions)(
  ({ drawerOpen, location, setDrawerOpen }) => {
    return (
      <Drawer temporary open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerHeader>Links</DrawerHeader>
        <DrawerContent>{getListItems(location)}</DrawerContent>
      </Drawer>
    );
  }
);

const listItems = [
  { path: '/', text: 'Landing Page' },
  { path: '/account', text: 'Account' },
];
function getListItems({ pathname } = { path: null }) {
  return listItems.map(({ path, text }) => {
    const isActive = pathname === path;
    return (
      <ListItem disabled={isActive} key={path}>
        <ListItemText className={css.fullWidth}>
          <NavLink exact to={path} disabled={isActive} activeClassName={css.active}>
            <Button className={css.fullWidth} disabled={isActive}>
              {text}
            </Button>
          </NavLink>
        </ListItemText>
      </ListItem>
    );
  });
}
