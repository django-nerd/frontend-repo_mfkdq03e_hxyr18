import React from 'react'
import { Target, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Trasforma l'idea in un Piano d'Azione chiaro
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Compila il blueprint per definire Visione, Stack Tecnologico, Requisiti e Timeline del tuo progetto digitale.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 shadow-sm">
                <Target className="h-4 w-4 text-indigo-600" /> Mission chiara
              </span>
              <span className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 shadow-sm">
                <Users className="h-4 w-4 text-fuchsia-600" /> Target definito
              </span>
            </div>
            <a href="#planner" className="mt-8 inline-flex items-center px-5 py-3 rounded-lg bg-slate-900 text-white font-medium shadow hover:opacity-95">
              Inizia a pianificare
            </a>
          </div>
          <div className="md:pl-8">
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl p-4 sm:p-6">
              <div className="absolute -top-10 -right-10 h-40 w-40 bg-fuchsia-200/40 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-indigo-200/40 rounded-full blur-3xl" />
              <img
                className="relative rounded-xl w-full"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop"
                alt="Pianificazione progetto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
