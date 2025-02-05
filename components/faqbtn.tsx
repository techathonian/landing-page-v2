import React from 'react'
import Image from "next/image"
const Faqbtn = () => {
  return (
    <div>
         <Image
                  width={32}
                  height={32}
                  src="/faq.svg"
                  alt="TECHATHON"
                  priority
                />
    </div>
  )
}

export default Faqbtn
