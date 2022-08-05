import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import { AppProps } from '../types/index';

import '../Less/app.less';

import Card from './comp.card';

const CardsContainer:FC = ({ setFavorite, NFTs, LIMIT }) => {
  return (
    <div className='cards-container'>
      <section>
        {
          NFTs && NFTs.length > 0 ? NFTs.slice(0, LIMIT).map(NFT => {
            if (NFT.image !== 'https://via.placeholder.com/500'
            && NFT.name !== 'SyntaxError') {
              return (<Card 
                key={NFT.id}
                tokenId={NFT.tokenId}
                ownerAddress={NFT.ownerAddress}
                image={NFT.image}
                title={NFT.title}
                contractAddress={NFT.contractAddress}
                description={NFT.description}
                attributes={NFT.attributes}
                userId={NFT.userId} 
                favorite={NFT.favorite}
                setFavorite={setFavorite}
                NFT={NFT}
              />);
              }
          }) : <div></div>
        }
      </section>
    </div>
  );
}

export default CardsContainer;
