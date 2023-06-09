//import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { Adapter } from '@solana/wallet-adapter-base';
import { WalletProvider } from '@solana/wallet-adapter-react' // ConnectionProvider, 
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'

//import type { AppProps } from 'next/app'
//import type { FC } from 'react';
//import type { NextPage } from 'next';

import Head from 'next/head'
import React from 'react'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui'


// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
//require('../styles/globals.css');


export default function App() {//: FC<AppProps> = ({ Component, pageProps }) => {

    const wallets: Adapter[] = []

    return (
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    {/* <Component {...pageProps} /> */}
                    <Home />
                </WalletModalProvider>
            </WalletProvider>
    )
}


function Home() {

    const { publicKey } = useWallet()
    const pubKey:string|undefined = publicKey?.toBase58() //useState(publicKey?.toBase58())
    
    return (
        <div >
            <Head>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <h1 >
                    Welcome to <a href="https://solana-mobile.github.io/mobile-wallet-adapter/spec/spec.html"> testing Solana MultiWallet Button with MWA</a>
                </h1>
                <div >
                            <WalletMultiButton />
                            <WalletDisconnectButton />
                </div>
                <code>{ `my code: ${pubKey}` }</code>
            </main>
        </div>
    )
}
