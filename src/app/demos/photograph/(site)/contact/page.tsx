'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-sans antialiased">
      {/* Hero */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="mb-6 font-serif text-4xl font-semibold text-zinc-900 md:text-5xl lg:text-6xl">
              Skontaktuj się ze mną
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">
              Masz pytania? Chcesz umówić sesję lub po prostu porozmawiać o swoich planach? Napisz lub zadzwoń — chętnie odpowiem na wszystkie pytania.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="mb-8 font-serif text-2xl font-semibold text-zinc-900 md:text-3xl">Dane Kontaktowe</h2>
              <div className="space-y-6">
                <ContactItem
                  icon={<svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>}
                  label="Telefon"
                  href="tel:+48123456789"
                  value="+48 123 456 789"
                  sub="Pon–Pt: 9:00–18:00"
                />
                <ContactItem
                  icon={<svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>}
                  label="Email"
                  href="mailto:anna@fotografia.pl"
                  value="anna@fotografia.pl"
                  sub="Odpowiadam w ciągu 24h"
                />
                <ContactItem
                  icon={<svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>}
                  label="Lokalizacja"
                  value="Warszawa"
                  sub="Ul. Przykładowa 12"
                />
              </div>

              <div className="mt-10 border-t border-zinc-200 pt-8">
                <p className="mb-4 font-semibold text-zinc-900">Obserwuj mnie</p>
                <div className="flex gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm text-white transition hover:bg-amber-700">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>
                    Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border-2 border-zinc-900 px-5 py-2.5 text-sm text-zinc-900 transition hover:bg-zinc-900 hover:text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
                <p className="mb-2 font-semibold text-zinc-900">💡 Wskazówka</p>
                <p className="text-sm text-zinc-700">
                  Aby przyspieszyć odpowiedź, w wiadomości podaj orientacyjny termin sesji i rodzaj usługi, którą Cię interesuje.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
              <h2 className="mb-6 font-serif text-2xl font-semibold text-zinc-900">Formularz Kontaktowy</h2>
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900">Wiadomość wysłana!</h3>
                  <p className="text-zinc-600">Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field id="name" label="Imię i nazwisko *" type="text" placeholder="Jan Kowalski" value={formData.name} onChange={handleChange} required />
                  <Field id="email" label="Email *" type="email" placeholder="jan@example.com" value={formData.email} onChange={handleChange} required />
                  <Field id="phone" label="Telefon" type="tel" placeholder="+48 123 456 789" value={formData.phone} onChange={handleChange} />
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-zinc-900">Rodzaj sesji *</label>
                    <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber-700">
                      <option value="">Wybierz rodzaj sesji</option>
                      <option value="wedding">Sesja ślubna</option>
                      <option value="portrait">Sesja portretowa</option>
                      <option value="family">Sesja rodzinna</option>
                      <option value="business">Sesja biznesowa</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-900">Wiadomość *</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Opowiedz mi o swojej wizji sesji, preferowanym terminie..." className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber-700" />
                  </div>
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-amber-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>
                    Wyślij wiadomość
                  </button>
                  <p className="text-center text-xs text-zinc-500">* Pola wymagane</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, label, value, href, sub }: { icon: React.ReactNode; label: string; value: string; href?: string; sub: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-700/10">{icon}</div>
      <div>
        <p className="font-semibold text-zinc-900">{label}</p>
        {href ? <a href={href} className="text-zinc-600 transition hover:text-amber-700">{value}</a> : <p className="text-zinc-600">{value}</p>}
        <p className="mt-0.5 text-sm text-zinc-500">{sub}</p>
      </div>
    </div>
  );
}

function Field({ id, label, type, placeholder, value, onChange, required }: {
  id: string; label: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-900">{label}</label>
      <input type={type} id={id} name={id} required={required} value={value} onChange={onChange} placeholder={placeholder}
        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber-700" />
    </div>
  );
}
