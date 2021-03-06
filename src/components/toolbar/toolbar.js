/* globals firebase */
import React from 'react';
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon,
} from 'rmwc/Toolbar';
import { connect } from 'unistore/react';
import { actions } from '../../store';
import { Exit } from '../../svg';

export default connect('currentUser,drawerOpen', actions)(
  ({ currentUser, drawerOpen, setDrawerOpen }) => {
    return (
      <Toolbar>
        <ToolbarRow>
          <ToolbarSection alignStart>
            {currentUser && (
              <ToolbarMenuIcon
                use="menu"
                onClick={() => setDrawerOpen(!drawerOpen)}
              />
            )}
            <ToolbarTitle>Toolbar</ToolbarTitle>
          </ToolbarSection>
          <ToolbarSection alignEnd>
            {currentUser && (
              <ToolbarIcon onClick={signOut}>
                <Exit />
              </ToolbarIcon>
            )}
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
    );
  }
);

function signOut() {
  firebase.auth().signOut();
}
