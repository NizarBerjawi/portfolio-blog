import React from 'react';
import NavItem from './item';

let Sidebar = ({ visible }) => {
    return (
        <div id="sidebar" className={'sidebar py-3'.concat(visible ? ' show' : ' shrink')}>
          <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">MAIN</div>
          <ul className="sidebar-menu list-unstyled">
            <NavItem
              title='Home'
              path='/dashboard'
              active={false}
              toggle={false}
              icon='o-home-1' />

            <NavItem
              title='Portfolio'
              path='/portfolio'
              active={false}
              toggle={false}
              icon='o-wireframe-1' />

            <NavItem
              title='Posts'
              path='/posts'
              active={false}
              icon='o-table-content-1' />
          </ul>
        </div>
    );
}

export default Sidebar;
