import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';

import '@/styles/global.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'AI Toolbox',
    description: 'All in one Ai Helper',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body
                    className={cn(
                        'min-h-screen bg-background font-sans antialiased',
                        inter.variable
                    )}
                >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
