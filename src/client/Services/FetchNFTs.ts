export default async function FetchNFTs(
  ownerAddress: string,
  contractAddress: string,
  setNFTs: any,
  userId: string
): Promise<any>{
  const API_KEY = 'e4xa9lvbY42JZDILglX_o_ZHBpLGEHzR';
  const endpoint = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;
  const data = await getAddressNFTs(endpoint, ownerAddress, contractAddress);
  if (data.ownedNfts.length) {
    const NFTs = await getNFTMetadata(endpoint, data.ownedNfts, userId, ownerAddress);
    const fulfilledNFTs = NFTs.filter(NFT => NFT.status = 'fulfilled');
    const deepNFTs = [];
    fulfilledNFTs.forEach(NFT => deepNFTs.push(NFT.value));
    deepNFTs !== null ? setNFTs(deepNFTs) : setNFTs(null);
  }
}

const getAddressNFTs = async (
  endpoint: string,
  ownerAddress: string,
  contractAddress: string,
  retryAttempt = 0
): Promise<any> => {
  // If fetch fails 5 times, throw error
  if (retryAttempt === 5) throw new Error('API connection failed after 5 attempts');
  // If owner address has been inputted by user, fetch NFT data from Alchemy API
  if (ownerAddress) {
    try {
        const result = contractAddress !== '' ? 
          await fetch(`${endpoint}/getNFTs?owner=${ownerAddress}&contractAddresses%5B%5D=${contractAddress}`) :
          await fetch(`${endpoint}/getNFTs?owner=${ownerAddress}`);
        return result.json();
      } catch (err) {
        getAddressNFTs(endpoint, ownerAddress, contractAddress, retryAttempt + 1);
    }
  }
}

const getNFTMetadata = async (
  endpoint: string,
  dataOwnedNfts: any,
  userId: string,
  ownerAddress: string
): Promise<any> => {
  return await await (Promise as any).allSettled(dataOwnedNfts.map(async (NFT): Promise<any> => {
    const metadata: any = await fetch(
      `${endpoint}/getNFTMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}`)
      .then(data => data.json());
      
    const imageUrl: string = metadata.media[0].gateway.length ?
      metadata.media[0].gateway :
      'https://via.placeholder.com/500'
    
    return {
      tokenId: NFT.id.tokenId,
      ownerAddress: ownerAddress,
      contractAddress: NFT.contract.address,
      image: imageUrl,
      title: metadata.metadata.name,
      description: metadata.metadata.description,
      attributes: metadata.metadata.attributes,
      userId: userId,
      watched: false
    }
  }));
}