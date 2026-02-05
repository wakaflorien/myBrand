import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
    title: 'Florien Niyongabo | Software Engineer',
    description: 'A professional portfolio showcasing elegant software solutions and refined experiences.',
};

import { DynamicThemeProvider } from '../components/ThemeProvider';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
            <body className="antialiased" suppressHydrationWarning>
                <DynamicThemeProvider>
                    {children}
                </DynamicThemeProvider>
            </body>
        </html>
    );
}
