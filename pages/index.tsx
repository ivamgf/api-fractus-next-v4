import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  const docsRoute = '/docs/'
  const contactsRoute = '/contacts/'

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
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

          <Link href={contactsRoute}>
            <div className={styles.card}>
              <h2>Contatos &rarr;</h2>
              <p>Entre em contato para tirar dúvidas, reclamações ou elogios!</p>
            </div>
          </Link>
          
          
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <span className={styles.logo}>
              <Image
                  src="/logo.png"
                  alt="Orkneytech Logo"
                  width={16}
                  height={16}
              />
          </span>
      </footer>
    </div>
  )
}

export default Home
