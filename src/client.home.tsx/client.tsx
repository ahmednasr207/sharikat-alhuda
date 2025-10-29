"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import RealEstateArticle from "./raiet"
import FullScreenImage from "./screenimg"
import Mapp from "./map"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [largeScreen, setLargeScreen] = useState<string | null>(null)
  const [hadenScreen, setHadens] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const photos = ["/1.jpg", "/2.jpg", "/3.jpg", "/6.jpg"]

  function handleResize(indexx: string) {
    setLargeScreen(indexx)
    setHadens(true)
  }

  function close() {
    setHadens(false)
  }

  return (
    <main
      id="home"
      className="mt-13 relative min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center text-center px-4 py-12"
    >
      {/* خلفية الموقع */}
      <div className="absolute inset-0">
        <Image
          src="/5.jpg"
          alt="خلفية موقع شركة الهدى للعقارات"
          fill
          className="object-cover object-center filter brightness-50"
          priority
        />
      </div>

      {/* اسم الشركة */}
      <h1 className="relative text-white text-5xl md:text-6xl font-extrabold drop-shadow-xl mb-6 z-10">
        شركة الهدى العقارية
      </h1>
      <p className="relative text-gray-300 text-lg md:text-xl mb-12 z-10">
        خبرة طويلة في التسويق والتطوير العقاري داخل المملكة
      </p>

      {/* قسم المشروعات */}
      <section id="projects" className="w-full text-white text-center z-10 mt-12">
        <h2  className="text-5xl md:text-6xl font-bold mb-4 text-blue-700">
          مشروعاتنا
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          مجموعة من أبرز المشاريع العقارية التي نفذتها شركة الهدى
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleResize(photo)}
            >
              <Image
                src={photo}
                alt={`مشروع عقاري ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-72"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </section>

      {/* قسم الخدمات */}
      <section
        id="services"
        className="text-white text-right mt-12 px-6 max-w-6xl w-full z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold  text-blue-700 mb-6 text-center">
          خدماتنا العقارية
        </h2>
        <p className="text-gray-300 text-center mb-8">
          نقدم باقة متكاملة من الخدمات العقارية تشمل البيع، الشراء، التسويق، وإدارة الممتلكات
        </p>

        <RealEstateArticle />
      </section>

      {/* عرض الصورة بالحجم الكامل */}
      {hadenScreen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <FullScreenImage imgg={largeScreen} />
            <button
              onClick={close}
              className="absolute -top-[-10px] right-3 text-white text-2xl bg-red-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* قسم الموقع */}
      <section className="w-full text-center text-white mt-20 z-10">
        <h2 id="map" className="text-5xl md:text-6xl font-bold  text-blue-700 mb-4">
          موقعنا الجغرافي
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          المملكة العربية السعودية – مدينة الرياض، حي الشفاء
        </p>
        <div className="w-full flex justify-center items-center">
          <Mapp />
        </div>
      </section>

      {/* زر واتساب للتواصل */}
      <a
        href="https://wa.me/966543378839"
        rel="noopener noreferrer"
        className={`fixed bottom-6 left-6 z-50 bg-green-600 p-4 rounded-full shadow-lg text-white hover:bg-green-700 transition-all duration-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        aria-label="تواصل عبر واتساب"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  )
}
