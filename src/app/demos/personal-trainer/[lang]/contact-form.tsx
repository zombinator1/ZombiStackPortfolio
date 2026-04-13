'use client';

import { useActionState } from 'react';
import { sendContactEmail, type ContactFormState } from '@/app/actions/contact';

type FormLabels = {
  labelGoal: string;
  placeholderGoal: string;
  labelName: string;
  labelEmail: string;
  labelPhone: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
};

const initialState: ContactFormState = { status: 'idle' };

export function TrainerContactForm({ labels }: { labels: FormLabels }) {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-white/10 bg-[#141019] p-10 text-center shadow-[0_18px_45px_rgba(0,0,0,0.24)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c44a7b]/50 text-xl text-[#c44a7b]">
          ✓
        </div>
        <div>
          <p className="font-extrabold uppercase tracking-[0.08em] text-white">{labels.successTitle}</p>
          <p className="mt-1 text-sm text-white/55">{labels.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-[2rem] border border-white/10 bg-[#141019] p-8 shadow-[0_20px_55px_rgba(0,0,0,0.28)]">
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="pt-goal" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-white/45">
            {labels.labelGoal}
          </label>
          <textarea
            id="pt-goal"
            name="description"
            rows={4}
            required
            placeholder={labels.placeholderGoal}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/28 outline-none transition focus:border-[#c44a7b]/50 focus:bg-white/[0.07]"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pt-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-white/45">
              {labels.labelName} <span className="text-[#c44a7b]">*</span>
            </label>
            <input
              id="pt-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/28 outline-none transition focus:border-[#c44a7b]/50 focus:bg-white/[0.07]"
            />
          </div>
          <div>
            <label htmlFor="pt-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-white/45">
              {labels.labelEmail} <span className="text-[#c44a7b]">*</span>
            </label>
            <input
              id="pt-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/28 outline-none transition focus:border-[#c44a7b]/50 focus:bg-white/[0.07]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="pt-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-white/45">
            {labels.labelPhone}
          </label>
          <input
            id="pt-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/28 outline-none transition focus:border-[#c44a7b]/50 focus:bg-white/[0.07]"
          />
        </div>

        {state.status === 'error' && (
          <p className="text-sm text-[#f1c5d6]">{state.message}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#c44a7b] py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-[#08070b] transition hover:bg-[#d76592] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? labels.submitting : (
            <>
              {labels.submit}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
