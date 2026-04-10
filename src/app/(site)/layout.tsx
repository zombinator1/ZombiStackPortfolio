import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { AnnouncementBanner } from '@/components/layout/announcement-banner';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBanner />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
