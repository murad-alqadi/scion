import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import { DropdownItemProps } from '../types/index';

import '../Less/app.less';

const DropDownItem:FC<DropdownItemProps> = ({ leftIcon, children, rightIcon, getFavorite }) => {

  return (
    <a className='menu-item'
      href='#' 
      onClick={getFavorite} >
      <span className='icon-button'>
        {leftIcon}
      </span>
      <span className='ddItem'>
        {children}
      </span>
      <span className='icon-right'>
        {rightIcon}
      </span>
    </a>
  )
}

export default DropDownItem;