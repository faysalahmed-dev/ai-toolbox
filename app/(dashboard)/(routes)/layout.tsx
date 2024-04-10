import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex h-full relative'>
            <div className='w-72 h-full hidden md:block'>
                <Sidebar />
            </div>
            <main className='w-full'>
                <Navbar />
                {children}
            </main>
        </div>
    );
}
