import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import { AppProps } from '../types/index';

import '../Less/app.less';

import NavSearch from './comp.navsearch';
import NavItem from './comp.navitem';
import DropDown from './comp.dropdown';

const NavBar:FC = ({ setUserId, setOwnerAddress, setContractAddress, getFavorite, setNFTs, setLIMIT, userId, ownerAddress, contractAddress }) => {
  return(
    <nav className='navbar'>
      <span className='title'>scion</span>
      <NavSearch 
        setUserId={setUserId}
        setOwnerAddress={setOwnerAddress}
        setContractAddress={setContractAddress}
        setNFTs={setNFTs}
        setLIMIT={setLIMIT}
        userId={userId}
        ownerAddress={ownerAddress}
        contractAddress={contractAddress}
      />
      <ul className='navbar-nav'>
        <NavItem>
          <DropDown 
            userId={userId} 
            getFavorite={getFavorite} 
          />
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;