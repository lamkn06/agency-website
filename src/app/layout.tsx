import Footer from '../shared/components/ui/Footer';
import Header from '../shared/components/ui/Header';
import { ThemeProvider } from '../shared/utils/theme';

export const metadata = {
  title: 'Home',
  description: 'Home',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
