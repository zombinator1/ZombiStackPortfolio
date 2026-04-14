'use client';

import { useActionState } from 'react';
import { sendContactEmail, type ContactFormState } from '@/app/actions/contact';

const initialState: ContactFormState = { status: 'idle' };

export function ElectricianContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  if (state.status === 'success') {
    return (
      <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-8 text-zinc-900">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Wiadomość wysłana</p>
        <h3 className="mt-3 text-2xl font-semibold text-zinc-950">Dziękujemy za kontakt.</h3>
        <p className="mt-4 text-sm leading-7 text-zinc-600">
          To demo korzysta z istniejącego mechanizmu wysyłki wiadomości, więc formularz został poprawnie podłączony.
          W realnym wdrożeniu w tym miejscu można wyświetlić już bardziej docelowy komunikat dla klienta końcowego.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-[1.75rem] border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="space-y-6">
        <div>
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-zinc-700">
            Opisz, czego dotyczy zlecenie <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            required
            placeholder="Np. Potrzebuję wyceny instalacji elektrycznej w nowym domu jednorodzinnym pod Warszawą. Interesuje mnie zakres od rozplanowania punktów do wykonania rozdzielni i odbioru prac."
            className="w-full resize-none rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-amber-500 focus:bg-white"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-700">
              Imię i nazwisko <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jan Kowalski"
              className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-amber-500 focus:bg-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-700">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jan@firma.pl"
              className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-amber-500 focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-zinc-700">
            Telefon <span className="text-zinc-400">(opcjonalnie)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+48 600 000 000"
            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-amber-500 focus:bg-white"
          />
        </div>

        {state.status === 'error' ? <p className="text-sm text-red-600">{state.message}</p> : null}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? 'Wysyłanie…' : 'Wyślij zapytanie'}
        </button>
      </div>

      <p className="mt-5 text-xs leading-6 text-zinc-500">Nie sprzedajemy danych i nie wysyłamy spamu. Formularz służy wyłącznie do kontaktu w sprawie realizacji.</p>
    </form>
  );
}
