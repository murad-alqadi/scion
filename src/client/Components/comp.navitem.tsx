import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
// import { AppProps } from '../types/index';

import '../Less/app.less';

const NavItem:FC = (props) => {

  const [open, setOpen] = React.useState(false);

  return(
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={(e) => {
        e.preventDefault();
        setOpen(!open);
      }}>
        ≡
      </a>
      { open && props.children }
    </li>
  );
}

export default NavItem;