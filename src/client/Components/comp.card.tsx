import * as React from 'react';
import { FC } from 'react';
import { apiRoute } from '../utils';
import '../Less/app.less';

const Card:FC = ({ image, tokenId, ownerAddress, title, contractAddress, description, attributes, userId, watched }) => {
  return(
    <div className='card'>
      <img key={tokenId} src={image} />
      <p>{title}</p>
      <p>NFT ID: {tokenId.slice(-3)}</p>
      <p>Owner address: {ownerAddress}</p>
      {/* <p>Your address: {userId}</p>
      <p>Watched: {String(watched)}</p>
      <p>Contract Address: {contractAddress}</p>
      <p>Description: {description}</p>
      <p>
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