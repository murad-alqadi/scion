import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import { AppProps } from '../types/index';

import '../Less/app.less';

import Card from './comp.card';

const CardsContainer:FC = ({ NFTs, LIMIT }) => {
  return (
    <div>
      <section>
        {
          NFTs.length > 0 ? NFTs.slice(0, LIMIT).map(NFT => {
            if (NFT.value.image !== 'https://via.placeholder.com/500'
            && NFT.value.name !== 'SyntaxError') {
              return (<Card 
                key={NFT.value.id + NFT.value.contractAddress}
                tokenId={NFT.value.tokenId}
                ownerAddress={NFT.value.ownerAddress}
                image={NFT.value.image}
                title={NFT.value.title}
                contractAddress={NFT.value.contractAddress}
                description={NFT.value.description}
                attributes={NFT.value.attributes}
                userId={NFT.value.userId} 
                watched={NFT.value.watched}
              />);
              }
          }) : <div></div>
        }
      </section>
    </div>
  );
}

export default CardsContainer;
