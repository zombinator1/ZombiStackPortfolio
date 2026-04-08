import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // W prawdziwej aplikacji tutaj byłoby wysłanie formularza
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-zinc-900 mb-6">
              Skontaktuj się ze mną
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              Masz pytania? Chcesz umówić sesję lub po prostu porozmawiać o swoich planach? Napisz lub zadzwoń - chętnie odpowiem na wszystkie pytania.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-zinc-900 mb-8">
                Dane Kontaktowe
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">Telefon</h3>
                    <a
                      href="tel:+48123456789"
                      className="text-zinc-600 hover:text-amber-700 transition-colors"
                    >
                      +48 123 456 789
                    </a>
                    <p className="text-sm text-zinc-500 mt-1">Pon-Pt: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">Email</h3>
                    <a
                      href="mailto:anna@fotografia.pl"
                      className="text-zinc-600 hover:text-amber-700 transition-colors"
                    >
                      anna@fotografia.pl
                    </a>
                    <p className="text-sm text-zinc-500 mt-1">Odpowiadam w ciągu 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">Lokalizacja</h3>
                    <p className="text-zinc-600">Warszawa i okolice</p>
                    <p className="text-sm text-zinc-500 mt-1">Dojazd w całej Polsce</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-200 pt-8">
                <h3 className="font-semibold text-zinc-900 mb-4">Obserwuj mnie</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-amber-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border-2 border-zinc-900 text-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>
                </div>
              </div>

              <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                <h3 className="font-semibold text-zinc-900 mb-2">💡 Wskazówka</h3>
                <p className="text-sm text-zinc-700">
                  Aby przyspieszyć odpowiedź, w wiadomości podaj orientacyjny termin sesji i rodzaj usługi, którą Cię interesuje.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
                <h2 className="text-2xl font-serif font-semibold text-zinc-900 mb-6">
                  Formularz Kontaktowy
                </h2>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                      Wiadomość wysłana!
                    </h3>
                    <p className="text-zinc-600">
                      Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-900 mb-2">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                        placeholder="Jan Kowalski"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                        placeholder="jan@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zinc-900 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                        placeholder="+48 123 456 789"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-zinc-900 mb-2">
                        Rodzaj sesji *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                      >
                        <option value="">Wybierz rodzaj sesji</option>
                        <option value="wedding">Sesja ślubna</option>
                        <option value="portrait">Sesja portretowa</option>
                        <option value="family">Sesja rodzinna</option>
                        <option value="business">Sesja biznesowa</option>
                        <option value="other">Inne</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-900 mb-2">
                        Wiadomość *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent resize-none"
                        placeholder="Opowiedz mi o swojej wizji sesji, preferowanym terminie..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Wyślij wiadomość
                    </button>

                    <p className="text-xs text-zinc-500 text-center">
                      * Pola wymagane
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-zinc-900 mb-4">
              Pytania przed kontaktem?
            </h2>
            <p className="text-zinc-600">
              Oto najczęściej zadawane pytania
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl border border-zinc-200">
              <h3 className="font-semibold text-zinc-900 mb-2">
                Jak szybko odpowiadasz na wiadomości?
              </h3>
              <p className="text-zinc-600">
                Zazwyczaj odpowiadam w ciągu 24 godzin. W weekendy może to potrwać nieco dłużej.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-zinc-200">
              <h3 className="font-semibold text-zinc-900 mb-2">
                Czy mogę umówić bezpłatną konsultację?
              </h3>
              <p className="text-zinc-600">
                Tak! Zawsze chętnie spotykam się z klientami (osobiście lub online) aby omówić szczegóły bez żadnych zobowiązań.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-zinc-200">
              <h3 className="font-semibold text-zinc-900 mb-2">
                Jak wygląda rezerwacja terminu?
              </h3>
              <p className="text-zinc-600">
                Po ustaleniu szczegółów, wysyłam umowę i dane do wpłaty zaliczki. Termin zostaje zarezerwowany po otrzymaniu zaliczki.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
