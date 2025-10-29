"use client"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")

  const handleClick = (hash) => {
    setActiveLink(hash)
    setMenuOpen(false) // يقفل القائمة في الموبايل بعد الاختيار
  }

  return (
    <nav dir="rtl" className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">

        {/* شعار الشركة */}
        <a href="#home" className="flex items-center justify-between ">
          <img src="/88.jpg" alt="شعار شركة الهدى" className="h-10 w-10 rounded-full ml-4" />
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
           bg-gray-900 md:bg-transparent space-y-4 md:space-y-0 p-6 md:p-0 transition-all duration-300`}
        >
          {[
            { href: "#home", label: "الرئيسية" },
            { href: "#projects", label: "مشروعاتنا" },
            { href: "#services", label: "الخدمات" },
            { href: "#map", label: "العنوان" },
            { href: "https://wa.me/966543378839", label: "اتصل بنا" },
          ].map((link) => (
            <li key={link.href} className="pl-4">
              <a
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`${
                  activeLink === link.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                } transition-colors text-2xl`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
