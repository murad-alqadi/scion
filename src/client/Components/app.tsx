import * as React from 'react';
import { apiRoute } from '../utils';
import { AppStates, AppProps } from '../types/index';
import { Get } from '../Services';

import '../Less/app.less';

import CardsContainer from './container.cards';
import NavBar from './comp.navbar';


export default class App extends React.Component<AppStates, AppProps> {
  constructor (props: any) {
    super(props);
    this.setUserId = this.setUserId.bind(this);
    this.setNFTs = this.setNFTs.bind(this);
    this.setLIMIT = this.setLIMIT.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  state: AppStates = {
    userId: '0xA100dfAb5e048b49F3003bF1A897A2b990472C6c',
    NFTs: [],
    LIMIT: 100
  };

  setUserId = async (newId: string): Promise<void> => {
    return this.setState({ userId: newId });
  }

  setNFTs = async (NFTs: any): Promise<void> => {
    return this.setState({ NFTs: NFTs });
  }

  setLIMIT = async (n: number): Promise<void> => {
    return this.setState({ LIMIT: n });
  }

  getFavorites = async (): Promise<void> => {
    try {
      const res: { NFTs: string } = await Get(apiRoute.getRoute('watched'));
      this.setState({NFTs: res.NFTs});
    } catch (e) {
      console.log(e);
  }
  }

  render() {
    return (
      <div>
        <NavBar 
          setUserId={this.setUserId}
          setNFTs={this.setNFTs}
          setLIMIT={this.setLIMIT}
          getFavorites={this.getFavorites}
          userId={this.state.userId}
        />
        <div className='main-container'>
          <CardsContainer 
            NFTs={this.state.NFTs}
            LIMIT={this.state.LIMIT}
          />
        </div>
      </div>
    );
  }
}
