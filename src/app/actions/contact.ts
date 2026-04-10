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
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const phone = (formData.get('phone') as string)?.trim();

  if (!description || !name || !email) {
    return { status: 'error', message: 'Wypełnij wszystkie wymagane pola.' };
  }

  try {
    await resend.emails.send({
      from: 'formularz@zombistack.com',
      to: 'bzabekk@gmail.com',
      subject: `Nowe zapytanie — ${name}`,
      text: [
        `Nowe zapytanie ze strony zombistack.pl`,
        ``,
        `Imię i nazwisko: ${name}`,
        `E-mail: ${email}`,
        ...(phone ? [`Telefon: ${phone}`] : []),
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
