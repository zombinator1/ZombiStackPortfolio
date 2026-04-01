import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-6xl font-black text-zinc-100">404</p>
      <h1 className="mt-4 text-2xl font-bold text-zinc-900">
        Nie ma takiej strony
      </h1>
      <p className="mt-2 text-zinc-500">
        Wygląda na to, że ta strona nie istnieje.
      </p>
      <div className="mt-8">
        <Button href="/">Wróć do strony głównej</Button>
      </div>
    </Container>
  );
}
