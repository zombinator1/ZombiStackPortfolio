'use client';

import { useActionState } from 'react';
import { sendContactEmail, type ContactFormState } from '@/app/actions/contact';

const initialState: ContactFormState = { status: 'idle' };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-xl">
          ✓
        </div>
        <div>
          <p className="font-semibold text-white">Wiadomość wysłana!</p>
          <p className="mt-1 text-sm text-zinc-400">Odezwę się najdalej następnego dnia roboczego.</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="description" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Opisz firmę i czego potrzebujesz
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            required
            placeholder="Np. Jestem elektrykiem w Gdańsku, obsługuję klientów indywidualnych i firmy. Chcę mieć stronę żeby ludzie mogli mnie łatwo znaleźć i się ze mną skontaktować."
            className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-zinc-500"
          />
        </div>
        <div>
          <label htmlFor="contact" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Imię i adres e-mail
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            placeholder="Jan Kowalski, jan@firma.pl"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-zinc-500"
          />
        </div>

        {state.status === 'error' && (
          <p className="text-sm text-red-400">{state.message}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? 'Wysyłanie…' : (
            <>
              Wyślij wiadomość
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
      <p className="mt-4 text-center text-xs text-zinc-600">
        Nie sprzedaję danych. Nie wysyłam spamu.
      </p>
    </form>
  );
}
