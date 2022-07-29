import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import { AppProps } from '../types/index';

import '../Less/app.less';

const DropDownItem:FC = ({ leftIcon, children, rightIcon, getFavorites }) => {

  return (
    <a href='#' onClick={getFavorites} className='menu-item'>
      <span className='icon-button'>{leftIcon}</span>
        <span className='ddItem'>{children}</span>
      <span className='icon-right'>{rightIcon}</span>
    </a>
  )
}

export default DropDownItem;