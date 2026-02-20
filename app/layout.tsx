import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
    title: 'Florien Niyongabo | Software Engineer',
    description: 'A professional portfolio showcasing elegant software solutions and refined experiences.',
    openGraph: {
        title: 'Florien Niyongabo | Software Engineer',
        description: 'A professional portfolio showcasing elegant software solutions and refined experiences.',
    },
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
                    <a
                        href="#main-content"
                        className="fixed left-4 top-4 z-[100] rounded-md bg-primary px-4 py-2 text-sm font-semibold text-background opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-opacity"
                    >
                        Skip to content
                    </a>
                    {children}
                </DynamicThemeProvider>
            </body>
        </html>
    );
}
