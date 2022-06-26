import React from "react";
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = "dev_kaleab";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const TWITTER="_buildspace";
const TWITTER_L= `https://twitter.com/${TWITTER}`;

const App = () => {
  const {publicKey} = useWallet();


  const renderNotConnectedContainer = () => (
    <div>
       <img src="https://media.giphy.com/media/cXpK2g8go9HxFJBjGD/giphy.gif" alt="emoji" />

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>    
    </div>
  );
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> 😎 Buildspace Pokemon Store 💖</p>
          <p className="sub-text">A Pokemon Character  store that  accept  Phantom wallet</p>
        </header>

        <main>
        
          {publicKey ? 'Connected!' : renderNotConnectedContainer()}

        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE} with @${TWITTER}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
