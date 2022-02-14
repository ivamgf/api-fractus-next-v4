import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  const docsRoute = '/docs/'

  return (
    <div className={styles.container}>
      <Head>
        <title>Api Fractus</title>
        <meta name="description" content="Api Fractus" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className={styles.main}>

        <img 
          src="/logo-fractus-cor.svg" 
          alt="Logo Fractus" 
          width={300}
          height={180}
        />

        <h1 className={styles.title}>
          Bem-vindos a Api Fractus!
        </h1>
        <br />

        <div className={styles.grid}>
          <Link href={docsRoute}>
            <div className={styles.card}>
              <h2>Documentação &rarr;</h2>
              <p>Encontre informações sobre a Api Fractus.</p>
            </div>            
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Contatos &rarr;</h2>
            <p>Entre em contato para tirar dúvidas, reclamações ou elogios!</p>
          </a>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
