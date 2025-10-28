import React from 'react'

export default function Mapp() {
  return (
    <div className='w-full flex justify-center items-center mt-12 mb-12'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d576225.4878508565!2d47.15217144611646!3d24.724831579878735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2!5e1!3m2!1sar!2ssa!4v1761649407725!5m2!1sar!2ssa"
        height={450} style={{border: 0}} allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" className="rounded-lg shadow-lg w-[80%]" />
    </div>
  )
}




 