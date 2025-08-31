import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <Image src={'/logo.jpg'}
      width={500}
      height={500}
      alt='About'
      />
    </div>
  )
}

export default About
