
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import icon from '../image/icon.png'
import LoginModal from '@/components/LoginModal'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuItems = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'เกี่ยวกับเรา', href: '/about' },
    { name: 'บริการของเรา', href: '/service' },
    { name: 'ติดต่อเรา', href: '/contact' },
    { name: 'state', href: '/state' },
    { name: 'context', href: '/context' }
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img src={icon.src} alt="Logo" className="h-8 w-8" />

              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  FirstNext
                </h1>
                <p className="text-xs text-gray-500">
                  Online E-Commerce
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-4 md:gap-6">

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-gray-700 transition-all duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Cart */}
              <Link
                href="/coming-soon"
                className="relative p-2 text-gray-700 transition-colors hover:text-blue-600"
                aria-label="ยังไม่มีหน้ารถเข็น"
              >
                🛒
              </Link>

              {/* Login Button */}
              <div className="hidden md:block">
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md'
                      : 'bg-white text-gray-900 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  เข้าสู่ระบบ
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}
