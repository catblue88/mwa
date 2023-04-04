//import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { Adapter } from '@solana/wallet-adapter-base';
import { WalletProvider } from '@solana/wallet-adapter-react' // ConnectionProvider, 
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
//import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
//import { clusterApiUrl } from '@solana/web3.js';
import type { AppProps } from 'next/app'
import type { FC } from 'react';
//import React, { useMemo } from 'react';

// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {

    const wallets: Adapter[] = []
//<WalletProvider wallets={wallets} autoConnect>
    return (
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    <Component {...pageProps} />
                </WalletModalProvider>
            </WalletProvider>
    )
}

export default App
