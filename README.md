# scion
nft explorer
by murad alqadi

Aim:
  At this time, many NFT explorers have been made. The aim of this project is to produce a cryptocurrency content management system built with infrastructure that is secure, agile, and scalable at its foundation with a compelling user interface. In its current form, it scion is an NFT explorer--a simple application that allows the user to access NFT metadata on the Ethereum blockchain. The user should ideally sign in with their Ethereum wallet and allow the application to store their preferred connected Ethereum address. Using their scion account, the user should be able to add NFT metadata from the explore page to a watched-list. Additionally, they can track its transaction history amongst other metrics as well.
  
Methods:
  Languages: TypeScript 4.X, HTML5, CSS3
  Runtime Environment: Node.js 14.X
  Web Application Framework: Express.js 4.16
  User Interface Framework: React 16.8
  Database Connection Library: Mongoose 5.1X
  Document-Oriented Database: mongoDB 6.0.0
  
  Developer Environment:
    1. Instell dependencies: 
        `$cd ./clonedrepository npm install`
    2. Enter mongoDB connection information into: $cd ./clonedrepository/src/server/configs.ts
        `url, port, username, password, collection`
    3. Run build
        `npm run build`
    4. Run production environment
       ``npm run start``
    5. Run developer environment
       ``npm run dev``
    6. Browser should open automatically
       ``production:8080 & developer:3000
