'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string };

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const description = (formData.get('description') as string)?.trim();
  const contact = (formData.get('contact') as string)?.trim();

  if (!description || !contact) {
    return { status: 'error', message: 'Wypełnij wszystkie pola.' };
  }

  try {
    await resend.emails.send({
      from: 'formularz@zombistack.com',
      to: 'bzabekk@gmail.com',
      subject: `Nowe zapytanie — ${contact}`,
      text: [
        `Nowe zapytanie ze strony zombistack.pl`,
        ``,
        `Nadawca: ${contact}`,
        ``,
        `---`,
        ``,
        description,
        ``,
        `---`,
        `Wysłano: ${new Date().toLocaleString('pl-PL')}`,
      ].join('\n'),
    });

    return { status: 'success' };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[contact action]', message);
    return { status: 'error', message: `Błąd: ${message}` };
  }
}
