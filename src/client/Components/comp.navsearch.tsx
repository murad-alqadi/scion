import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import { AppProps } from '../types/index';
import { FetchNFTs } from "../Services";

import '../Less/app.less';

const NavSearch:FC = ({ setNFTs, setLIMIT, userId }) => {

  const [ownerAddress, setOwnerAddress] = React.useState('');
  const [contractAddress, setContractAddress] = React.useState('');

  return(
    <div className='navbar-search'>
      <div className='owner-search'>
        <input autoFocus onClick={(event) => event.target.select()} className='search-input' value={ownerAddress} onChange={(e) => {
          setOwnerAddress(e.target.value)
        }} placeholder='search by ethereum account address'></input><br />
        <div className='search-button'>
        <button onClick={
          (e) => {
            e.preventDefault();
            let contractAddressChecked: string;
            contractAddress ? contractAddressChecked = contractAddress : contractAddressChecked = '';
            FetchNFTs(ownerAddress, contractAddressChecked, setNFTs, userId)
          }
        }>{"➜"}</button>
      </div>
      </div>
      {/* <input value={contractAddress} className='contract-search' onChange={(e) => setContractAddress(e.target.value)} placeholder='Focus search with contract address (optional)'></input><br /> */}
    </div>
  );
}

export default NavSearch;