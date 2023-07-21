import Image from 'next/image'

import giraffe from '../public/giraffe.jpg' 

export default function Custom404() {
    return (
      <>
        <h1>404 - Hellooo, Page Not Found</h1>
        <Image
          src={giraffe}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </>
    )
  }