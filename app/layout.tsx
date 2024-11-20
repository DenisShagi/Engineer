import Sidebar from '@/components/Sidebar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className="flex">
                <Sidebar />
                <main className="flex-1 bg-gray-100 p-4">{children}</main>
            </body>
        </html>
    );
}
