'use client'

import { useEffect } from 'react'

export default function NavScripts() {
  useEffect(() => {
    const nav = document.getElementById('navbar')
    const handleScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return null
}
