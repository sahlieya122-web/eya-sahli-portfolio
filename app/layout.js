import './globals.css';

export const metadata = {
  title: 'Eya Sahli — Portfolio',
  description: 'Signal, RF, embedded systems and applied AI engineering portfolio of Eya Sahli.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
