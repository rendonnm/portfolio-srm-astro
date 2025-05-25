import { useEffect, useState } from 'react'
import { navSections } from "../lib/constants/headerNavSections"

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navSections.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, offset: Infinity }
        return { id, offset: el.getBoundingClientRect().top }
      })

      const visible = sectionOffsets
        .filter(({ offset }) => offset <= 120)
        .sort((a, b) => b.offset - a.offset)

      setActiveSection(visible[0]?.id || '')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="flex h-12 items-center justify-center px-6 rounded-full border border-zinc-600/75 bg-[#030511]/40 shadow-lg backdrop-blur-sm text-sm md:text-[16px]">
      <ul className="flex gap-5 w-full">
        {navSections.map((section) => {
          const isActive = activeSection === section.id
          return (
            <li key={section.id}>
              <a
                href={section.href}
                className={`transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-white/60 font-light hover:text-white/80'
                }`}
              >
                {section.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}