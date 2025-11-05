import React from 'react'
import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-semibold text-slate-900">Nuovo Progetto Digitale</span>
            <span className="block text-xs text-slate-500 -mt-0.5">Blueprint di Sviluppo Web</span>
          </span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#vision" className="hover:text-slate-900 transition-colors">Visione</a>
          <a href="#stack" className="hover:text-slate-900 transition-colors">Stack</a>
          <a href="#requisiti" className="hover:text-slate-900 transition-colors">Requisiti</a>
          <a href="#planner" className="hover:text-slate-900 transition-colors">Planner</a>
        </nav>
      </div>
    </header>
  )
}
