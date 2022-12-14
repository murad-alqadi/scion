import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import { AppProps } from '../types/index';

import '../Less/app.less';

import DropDownItem from './comp.dropdownitem';

const DropDown:FC = ({ userId, getWatched }) => {
  return(
    <div className='dropdown'>
      <DropDownItem leftIcon='Ξ' rightIcon='➡'>
        My Profile
      </DropDownItem>
      <DropDownItem userId={userId} getWatched={getWatched} leftIcon='🤍'>
        My Favorites
      </DropDownItem>
    </div>
  );
}

export default DropDown;