import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import { DropdownProps } from '../types/index';

import '../Less/app.less';

import DropDownItem from './comp.dropdownitem';

const DropDown:FC<DropdownProps> = ({ userId, getFavorite }) => {
  return(
    <div className='dropdown'>
      <DropDownItem 
        leftIcon='Ξ'
        rightIcon='➡'>
          My Profile
      </DropDownItem>
      <DropDownItem 
        userId={userId} 
        getFavorite={getFavorite} 
        leftIcon='🤍'>
          My Favorites
      </DropDownItem>
    </div>
  );
}

export default DropDown;