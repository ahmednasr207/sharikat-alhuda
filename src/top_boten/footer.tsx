"use client"
import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-gray-900 text-white ">
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* معلومات الشركة */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              شركة الهدى للعقارات
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              نقدم لكم أفضل الخدمات العقارية باحترافية وجودة عالية. 
              نساعدك في العثور على العقار المناسب بأسعار تنافسية.
            </p>

            {/* أيقونات السوشيال */}
            <div className="flex space-x-4 rtl:space-x-reverse text-2xl">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="فيسبوك"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
                aria-label="تويتر"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="انستجرام"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/20123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="واتساب"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">مشروعاتنا</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">الخدمات</a></li>
              <li><a href="#map" className="hover:text-white transition-colors"> العنوان</a></li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h4 className="text-lg font-semibold mb-4">اتصل بنا</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📞 012300456789</li>
              <li>📧 info@alhudaaaaa.com</li>
              <li>📍 الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} شركة الهدى للعقارات — جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
