import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
//import Image from 'next/image';
import React from 'react';
//import {useState} from 'react';
import styles from '../styles/Home.module.css'
import { useWallet } from '@solana/wallet-adapter-react'

import {WalletDisconnectButton, WalletMultiButton} from '@solana/wallet-adapter-react-ui'


// const WalletDisconnectButtonDynamic = dynamic(
//     async () => (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
//     { ssr: false }
// );
// const WalletMultiButtonDynamic = dynamic(
//     async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
//     { ssr: false }
// )



const Home: NextPage = () => {
    //const { connection } = useConnection()
    const { publicKey } = useWallet()

    const pubKey:string|undefined = publicKey?.toBase58() //useState(publicKey?.toBase58())

    //if (typeof(pubKey) === PublicKey) console.log(pubKey.toBase58())
    console.log("Hello", pubKey)//Todo: it can be publicKey.toBase58()
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://solana-mobile.github.io/mobile-wallet-adapter/spec/spec.html"> testing Solana MultiWallet Button with MWA</a>
                </h1>

                <div className={styles.walletButtons}>
                    {/* <WalletMultiButtonDynamic /> */}
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    {/* <WalletDisconnectButtonDynamic /> */}
                </div>

                <p className={styles.description}>
                    <code className={styles.code}>{ `my code: ${pubKey}` }</code>                    
                </p>

                <div className={styles.grid}>
                    <a href="https://react.dev/learn" className={styles.card}>
                        <h2> React Documentation &rarr;</h2>
                        <p></p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2> and more in Next.JS &rarr;</h2>
                        <p></p>
                    </a>
               
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                </a>
            </footer>
        </div>
    )
};

export default Home;
