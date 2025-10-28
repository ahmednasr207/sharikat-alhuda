"use client"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav dir="rtl" className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* شعار الشركة */}
        <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="/88.jpg" alt="شعار شركة الهدى" className="h-10 w-10 rounded-full" />
          <span className="text-2xl font-bold text-blue-400">شركة الهدى للعقارات</span>
        </a>

        {/* زر القائمة للموبايل */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* روابط التنقل */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row absolute md:static top-16 right-0 w-full md:w-auto
           bg-gray-900 md:bg-transparent space-y-4 md:space-y-0  p-6
            md:p-0 transition-all duration-300`}
        >
          <li className="pl-4">
            <a href="#home" className="hover:text-blue-400 transition-colors text-2xl">الرئيسية</a>
          </li>
          <li className="pl-4">
            <a href="#projects" className="hover:text-blue-400 transition-colors text-2xl">مشروعاتنا</a>
          </li>
  <li className="pl-4">
            <a href="#services" className="hover:text-blue-400 transition-colors text-2xl">الخدمات</a>
          </li>

          <li className="pl-4">
            <a href="#map" className="hover:text-blue-400 transition-colors text-2xl">العنوان</a>
          </li>
        
          <li className="pl-4">
            <a href="https://wa.me/966543378839" className="hover:text-blue-400 transition-colors text-2xl">اتصل بنا</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
        
