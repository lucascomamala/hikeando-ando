import Image from 'next/image'

import HeroBanner from '@/components/HeroBanner'
import Experiencias from '@/components/Experiencias'
import Clouds from '@/components/Clouds'

export default function Home() {
  return (
    <>
      <Clouds />
      <HeroBanner />
      <Experiencias />
    </>
  )
}
