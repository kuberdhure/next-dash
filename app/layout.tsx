// @ts-expect-error CSS side-effect imports are handled by the bundler.
import '@/app/ui/global.css';
import { dm_sans } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
