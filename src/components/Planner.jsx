import React, { useMemo, useState } from 'react';
import { Target, Server, Database, Shield, Search, Bell, Settings, Calendar } from 'lucide-react';

const SectionTitle = ({ icon: Icon, title, id }) => (
  <div id={id} className="flex items-center gap-2 mb-4">
    <div className="h-8 w-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
      <Icon className="h-4 w-4" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
  </div>
);

const Field = ({ label, children }) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700">{label}</span>
    <div className="mt-1">{children}</div>
  </label>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs border border-slate-200">
    {children}
  </span>
);

const Planner = () => {
  const [form, setForm] = useState({
    nome: '',
    mission: '',
    target: 'Consumatori finali',
    tipo: ['Web App/SaaS'],
    frontend: 'React',
    stato: 'Stato locale',
    backend: 'Python (FastAPI)',
    architettura: 'Monolitica',
    api: 'REST',
    database: 'MongoDB',
    scalabilita: 'Scalabilità orizzontale su container',
    hosting: 'AWS',
    ci: 'GitHub Actions',
    auth: true,
    gestione: true,
    integrazione: 'Stripe',
    ricerca: true,
    notifiche: 'Email',
    performance: 'LCP < 2.5s, TTI < 3s',
    sicurezza: 'OWASP Top 10',
    utenti: '10.000 utenti attivi/giorno',
    monitoring: 'Sentry + Prometheus',
    timeline: 'MVP in 6 settimane',
  });

  const handleChange = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const summary = useMemo(() => ({
    visione: {
      nome: form.nome || 'Nuovo Progetto Digitale',
      mission: form.mission || 'Definire e lanciare un MVP efficace',
      target: form.target,
      tipo: form.tipo.join(', '),
    },
    stack: {
      frontend: `${form.frontend} • ${form.stato}`,
      backend: `${form.backend} • ${form.architettura} • API ${form.api}`,
      database: `${form.database} • ${form.scalabilita}`,
      infra: `${form.hosting} • CI/CD: ${form.ci}`,
    },
    requisiti: {
      funzionali: [
        form.auth && 'Autenticazione con JWT',
        form.gestione && 'CRUD sull\'oggetto principale',
        `Integrazione esterna: ${form.integrazione}`,
        form.ricerca && 'Ricerca e filtri avanzati',
        `Notifiche via ${form.notifiche}`,
      ].filter(Boolean),
      nonFunzionali: [
        `Performance: ${form.performance}`,
        `Sicurezza: ${form.sicurezza}`,
        `Scalabilità: ${form.utenti}`,
        `Monitoring: ${form.monitoring}`,
      ],
      timeline: form.timeline,
    }
  }), [form]);

  return (
    <section id="planner" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div id="vision" className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
            <SectionTitle icon={Target} title="1) Visione e Obiettivi" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome del Progetto">
                <input
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Es. Piattaforma E-commerce B2B"
                  value={form.nome}
                  onChange={(e) => handleChange('nome', e.target.value)}
                />
              </Field>
              <Field label="Target Utente">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.target}
                  onChange={(e) => handleChange('target', e.target.value)}
                >
                  <option>Consumatori finali</option>
                  <option>Agenti di vendita interni</option>
                  <option>Aziende partner</option>
                </select>
              </Field>
              <Field label="Obiettivo Primario (Mission)">
                <input
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Es. Aumentare le vendite del 20%"
                  value={form.mission}
                  onChange={(e) => handleChange('mission', e.target.value)}
                />
              </Field>
              <Field label="Tipo di Progetto">
                <div className="flex flex-wrap gap-2">
                  {['Sito Vetrina','E-commerce','Web App/SaaS','Portale Clienti'].map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => handleChange('tipo', form.tipo.includes(t) ? form.tipo.filter(x=>x!==t) : [...form.tipo, t])}
                      className={`px-3 py-1.5 rounded-md border text-sm ${form.tipo.includes(t) ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </Field>
            </div>
          </div>

          <div id="stack" className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
            <SectionTitle icon={Server} title="2) Stack Tecnologico e Architettura" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Frontend">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.frontend}
                  onChange={(e) => handleChange('frontend', e.target.value)}
                >
                  <option>React</option>
                  <option>Vue.js</option>
                  <option>Angular</option>
                  <option>HTML/CSS/JS</option>
                </select>
              </Field>
              <Field label="Stato UI">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.stato}
                  onChange={(e) => handleChange('stato', e.target.value)}
                >
                  <option>Stato locale</option>
                  <option>Zustand</option>
                  <option>Redux</option>
                </select>
              </Field>
              <Field label="Backend">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.backend}
                  onChange={(e) => handleChange('backend', e.target.value)}
                >
                  <option>Python (FastAPI)</option>
                  <option>Node.js (Express)</option>
                  <option>PHP (Laravel)</option>
                  <option>Go</option>
                </select>
              </Field>
              <Field label="Architettura">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.architettura}
                  onChange={(e) => handleChange('architettura', e.target.value)}
                >
                  <option>Monolitica</option>
                  <option>Microservizi</option>
                </select>
              </Field>
              <Field label="API">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.api}
                  onChange={(e) => handleChange('api', e.target.value)}
                >
                  <option>REST</option>
                  <option>GraphQL</option>
                </select>
              </Field>
              <Field label="Database">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.database}
                  onChange={(e) => handleChange('database', e.target.value)}
                >
                  <option>MongoDB</option>
                  <option>PostgreSQL</option>
                  <option>MySQL</option>
                </select>
              </Field>
              <Field label="Scalabilità">
                <input
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.scalabilita}
                  onChange={(e) => handleChange('scalabilita', e.target.value)}
                />
              </Field>
              <Field label="Hosting/Deployment">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.hosting}
                  onChange={(e) => handleChange('hosting', e.target.value)}
                >
                  <option>AWS</option>
                  <option>Google Cloud Platform (GCP)</option>
                  <option>Azure</option>
                  <option>Server Privato</option>
                </select>
              </Field>
              <Field label="CI/CD">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.ci}
                  onChange={(e) => handleChange('ci', e.target.value)}
                >
                  <option>GitHub Actions</option>
                  <option>GitLab CI</option>
                  <option>Jenkins</option>
                </select>
              </Field>
            </div>
          </div>

          <div id="requisiti" className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
            <SectionTitle icon={Shield} title="3) Requisiti" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Autenticazione JWT">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.auth}
                    onChange={(e) => handleChange('auth', e.target.checked)}
                  />
                  <span className="text-sm text-slate-600">Registrazione, Login, Recupero Password</span>
                </div>
              </Field>
              <Field label="Gestione Oggetto Principale">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.gestione}
                    onChange={(e) => handleChange('gestione', e.target.checked)}
                  />
                  <span className="text-sm text-slate-600">Crea, modifica, elimina</span>
                </div>
              </Field>
              <Field label="Integrazione Esterna">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.integrazione}
                  onChange={(e) => handleChange('integrazione', e.target.value)}
                >
                  <option>Stripe</option>
                  <option>PayPal</option>
                  <option>CRM (HubSpot)</option>
                  <option>API di Terze Parti</option>
                </select>
              </Field>
              <Field label="Ricerca Avanzata">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.ricerca}
                    onChange={(e) => handleChange('ricerca', e.target.checked)}
                  />
                  <span className="text-sm text-slate-600">Filtri veloci e accurati</span>
                </div>
              </Field>
              <Field label="Notifiche">
                <select
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.notifiche}
                  onChange={(e) => handleChange('notifiche', e.target.value)}
                >
                  <option>Email</option>
                  <option>Push Notification</option>
                </select>
              </Field>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
            <SectionTitle icon={Settings} title="4) Requisiti Non Funzionali e Sicurezza" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Performance">
                <input
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.performance}
                  onChange={(e) => handleChange('performance', e.target.value)}
                />
              </Field>
              <Field label="Sicurezza">
                <input
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.sicurezza}
                  onChange={(e) => handleChange('sicurezza', e.target.value)}
                />
              </Field>
              <Field label="Scalabilità (volume utenti)">
                <input
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.utenti}
                  onChange={(e) => handleChange('utenti', e.target.value)}
                />
              </Field>
              <Field label="Monitoring/Logging">
                <input
                  className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={form.monitoring}
                  onChange={(e) => handleChange('monitoring', e.target.value)}
                />
              </Field>
              <Field label="Timeline">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-slate-500" />
                  <input
                    className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={form.timeline}
                    onChange={(e) => handleChange('timeline', e.target.value)}
                  />
                </div>
              </Field>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6 sticky top-24">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Riepilogo</h3>
            <p className="text-sm text-slate-600 mb-4">Panoramica dinamica del tuo blueprint.</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-slate-900">Visione</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Chip>{summary.visione.nome}</Chip>
                  <Chip>{summary.visione.tipo}</Chip>
                  <Chip>{summary.visione.target}</Chip>
                </div>
                <p className="mt-2 text-sm text-slate-700">{summary.visione.mission}</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Stack</h4>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc list-inside">
                  <li>{summary.stack.frontend}</li>
                  <li>{summary.stack.backend}</li>
                  <li>{summary.stack.database}</li>
                  <li>{summary.stack.infra}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Requisiti Critici</h4>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc list-inside">
                  {summary.requisiti.funzionali.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Qualità & Sicurezza</h4>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc list-inside">
                  {summary.requisiti.nonFunzionali.map((nf, i) => (
                    <li key={i}>{nf}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 flex items-center gap-2 text-sm text-slate-700">
                <Search className="h-4 w-4 text-indigo-600" />
                <span>Ricerca ottimizzata</span>
                <Bell className="h-4 w-4 text-fuchsia-600 ml-4" />
                <span>Notifiche evento-driven</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Planner;
