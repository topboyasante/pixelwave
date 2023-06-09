import AboutSection from '@/components/page-sections/AboutSection'
import MainHero from '@/components/page-sections/MainHero'
import Projects from '@/components/page-sections/Projects'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixelwave</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='glass-container'>
        <MainHero/>
        <AboutSection/>
        <Projects/>
      </main>
    </>
  )
}
