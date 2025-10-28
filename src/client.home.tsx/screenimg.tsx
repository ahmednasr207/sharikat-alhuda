"use client"

import Image from "next/image"

export default function FullScreenImage({ imgg }: { imgg: string | null }) {
  return (
    <div
      className=" w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] z-50 transform transition-transform duration-300 scale-100"
     
    >
      <Image
        src={imgg || ""}
        alt="صورة في الوسط"
        fill
        className="object-cover rounded-lg "
        priority
      />
    </div>
  )
}
