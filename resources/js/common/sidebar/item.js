import React from 'react';
import { Redirect, Link } from 'react-router-dom';

let NavItem = ({ title, path, active = false, icon, toggle = false, children }) => {
  let subItems;

  let linkAttributes = {
    className: 'sidebar-link text-muted'.concat(active ? ' active' : ''),
    to: path,
  }

  if (toggle) {
    let target = title.toLowerCase();
    linkAttributes['data-toggle'] = 'collapse';
    linkAttributes['data-target'] = '#'+target;
    linkAttributes['aria-expanded'] = toggle;
    linkAttributes['aria-controls'] = target;
    linkAttributes['to'] = '#';

    subItems = (
      <div id={target} className="collapse">
        <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
          {children}
        </ul>
      </div>);
  }

  return (
    <li className="sidebar-list-item">
      <Link {...linkAttributes}>
        <i className={'mr-3 text-gray'.concat(icon ? ` ${icon}` : '')}></i><span>{title}</span>
      </Link>
      {toggle && subItems}

    </li>
  );
}

export default NavItem;
