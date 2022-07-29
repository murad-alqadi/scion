# scion<br />
nft explorer<br />
by murad alqadi<br />
<br /><br />
Aim:<br />
&emsp;  At this time, many NFT explorers have been made. The aim of this project is to produce a cryptocurrency content management system built with infrastructure that is secure, agile, and scalable at its foundation with a compelling user interface. In its current form, scion is an NFT explorer--a simple application that allows the user to access NFT metadata on the Ethereum blockchain. The user should ideally sign in with their Ethereum wallet and allow the application to store their preferred connected Ethereum address. Using their scion account, the user should be able to add NFT metadata from the explore page to a watched-list. Additionally, they can track watched NFT transaction history.
<br /><br />
Methods:<br />
&emsp;  Languages: TypeScript 4.X, HTML5, CSS3<br />
&emsp;  Runtime Environment: Node.js 14.X<br />
&emsp;  Web Application Framework: Express.js 4.16<br />
&emsp;  User Interface Framework: React 16.8<br />
&emsp;  Database Connection Library: Mongoose 5.1X<br />
&emsp;  Document-Oriented Database: mongoDB 6.0.0<br />
  <br /><br />
&emsp;  Developer Environment:<br />
&emsp;&emsp;    1. Instell dependencies: <br />
&emsp;&emsp;&emsp;        `$cd ./clonedrepository npm install`<br />
&emsp;&emsp;    2. Enter mongoDB connection information into: $cd ./clonedrepository/src/server/configs.ts<br />
&emsp;&emsp;&emsp;        `// url, port, username, password, collection`<br />
&emsp;&emsp;    3. Run build<br />
&emsp;&emsp;&emsp;        `$cd ./clonedrepository npm run build`<br />
&emsp;&emsp;    4. Run production environment<br />
&emsp;&emsp;&emsp;       ``$cd ./clonedrepository npm run start``<br />
&emsp;&emsp;    5. Run developer environment<br />
&emsp;&emsp;&emsp;       ``$cd ./clonedrepository npm run dev``<br />
&emsp;&emsp;    6. Browser should open automatically<br />
 &emsp;&emsp;&emsp;      ``// production:8080 & developer:3000``<br />
