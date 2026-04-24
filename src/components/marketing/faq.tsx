'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';

const items = [
  {
    question: 'Pytanie pierwsze?',
    answer: 'Odpowiedź na pytanie pierwsze. Tutaj możesz wpisać dowolny tekst.',
  },
  {
    question: 'Pytanie drugie?',
    answer: 'Odpowiedź na pytanie drugie. Tutaj możesz wpisać dowolny tekst.',
  },
  {
    question: 'Pytanie trzecie?',
    answer: 'Odpowiedź na pytanie trzecie. Tutaj możesz wpisać dowolny tekst.',
  },
  {
    question: 'Pytanie czwarte?',
    answer: 'Odpowiedź na pytanie czwarte. Tutaj możesz wpisać dowolny tekst.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-medium text-zinc-900">{question}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-zinc-500">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section className="relative bg-gradient-to-b from-white via-zinc-50/40 to-white py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <Container>
        <div className="mx-auto max-w-2xl">
          {items.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
