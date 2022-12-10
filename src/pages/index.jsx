import Head from 'next/head'
import { useCallback } from 'react'
import { Footer } from 'src/components/Footer/Footer'
import { Header } from 'src/components/Header/Header'
import { Main } from 'src/components/Main/Main'
import styles from 'src/styles/Home.module.css'

export default function Home() {
  const handleClick = useCallback((e) => {
    e.preventDefault()
    console.log(e.target)
    alert(123)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
      </Head>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  )
}