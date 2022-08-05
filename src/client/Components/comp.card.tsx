import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import { CardProps } from '../types/index';
import '../Less/app.less';

const Card:FC<CardProps> = ({ 
    image, 
    tokenId, 
    ownerAddress, 
    title, 
    contractAddress, 
    description, 
    attributes, 
    userId, 
    favorite, 
    setFavorite, 
    NFT 
  }) => {
  return(
    <div className='card'>
      <img 
        key={tokenId} 
        src={image} 
      />
      <p>{title}</p>
      <p>NFT ID: {tokenId.slice(-3)}</p>
      <p>Owner address: {ownerAddress}</p>
      <p>Your address: {userId}</p>
      <a href='#' 
        onClick={() => setFavorite({
          ...NFT,
          favorite: true
        })}>
        Favorite: {String(favorite)}
      </a>
      <p>Contract Address: {contractAddress}</p>
      {/* <p>Description: {description}</p> */}
      {/* <p>
        {
          attributes?.length > 0 && attributes.map(feature => {
            return (
              <div>
                <p>{feature.trait_type}:</p>
                <p>{feature.value}</p>
              </div>
            )
          })
        }
      </p> */}
    </div>
  );
}

export default Card;