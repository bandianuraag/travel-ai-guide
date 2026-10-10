export const metadata = {
  title: 'Travel AI Guide',
  description: 'AI-inspired travel recommendations for destinations around the world.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
