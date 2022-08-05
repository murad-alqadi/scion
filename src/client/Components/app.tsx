import * as React from 'react';
import { apiRoute } from '../utils';
import { AppStates, AppProps } from '../types/index';
import { Get, Post, Put, Delete } from '../Services/index';
import { IFavorite } from "../../server/interfaces/IFavorite";

import '../Less/app.less';

import CardsContainer from './container.cards';
import NavBar from './comp.navbar';

export default class App extends React.Component<AppStates, AppProps> {
  constructor (props: any) {
    super(props);
    this.setUserId = this.setUserId.bind(this);
    this.setNFTs = this.setNFTs.bind(this);
    this.setLIMIT = this.setLIMIT.bind(this);
    this.getFavorite = this.getFavorite.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
  }

  state: AppStates = {
    userId: '0xA100dfAb5e048b49F3003bF1A897A2b990472C6c',
    NFTs: [],
    LIMIT: 500
  };

  setUserId = async (newId: string): Promise<void> => {
    return this.setState({ userId: newId });
  }

  setNFTs = async (NFTs: IFavorite): Promise<void> => {
    return this.setState({ NFTs: NFTs });
  }

  setLIMIT = async (n: number): Promise<void> => {
    return this.setState({ LIMIT: n });
  }

  getFavorite = async (): Promise<void> => {
    try {
      const res: any = await Get(apiRoute.getRoute('favorite'));
      console.log(res);
      this.setState({NFTs: res});
    } catch (e) {
      console.log(e);
    }
  }

  setFavorite = async (NFT: IFavorite): Promise<void> => {
    try {
      const res: IFavorite = await Post(
        apiRoute.getRoute('favorite'),
        NFT
      );
      console.log('Successfully stored in MongoDB: ', NFT)
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
          setFavorite={this.setFavorite}
          userId={this.state.userId}
        />
        <div className='main-container'>
          <CardsContainer 
            setFavorite={this.setFavorite}
            NFTs={this.state.NFTs}
            LIMIT={this.state.LIMIT}
          />
        </div>
      </div>
    );
  }
}
