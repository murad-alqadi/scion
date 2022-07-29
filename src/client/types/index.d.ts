declare module "*.png" {
    const value: string;
    export = value;
}

declare module '*.jpg'
declare module '*.gif'
declare module '*.less'

export interface AppStates {
  userId: string,
  NFTs: any[],
  LIMIT: number
}

export interface AppProps {}