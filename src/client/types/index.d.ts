declare module "*.png" {
    const value: string;
    export = value;
}

declare module '*.jpg'
declare module '*.gif'
declare module '*.less'

export interface AppProps {
  userId: string,
  NFTs: [],
  LIMIT: number
}

export interface CardProps {
  image: string, 
  tokenId: string, 
  ownerAddress: string, 
  title: string, 
  contractAddress: string, 
  description: string, 
  attributes: string, 
  userId: string, 
  favorite: boolean, 
  setFavorite: any, 
  NFT: any
}

export interface DropdownProps {
  userId: string,
  getFavorite: any
}


export interface DropdownItemProps {
  leftIcon: string, 
  children: any, 
  rightIcon: string, 
  getFavorite: any
}


export interface NavbarProps {
  setUserId: any, 
  setOwnerAddress: any, 
  setContractAddress: any, 
  getFavorite: any, 
  setNFTs: any, 
  setLIMIT: any, 
  userId: string, 
  ownerAddress: string, 
  contractAddress: string 
}

export interface NavSearchProps {
  setNFTs: any, 
  setLIMIT: any, 
  userId: string
}

export interface CardContProps {
  setFavorite: any, 
  NFTs: any, 
  LIMIT: number
}