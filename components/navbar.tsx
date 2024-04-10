import { UserButton } from '@clerk/nextjs';
import MobileNav from './sidebar/MobileSidebar';

export default function Navbar() {
    return (
        <div className='p-4 flex'>
            <div className='block md:hidden'>
                <MobileNav />
            </div>
            <div className='ml-auto'>
                <UserButton />
            </div>
        </div>
    );
}
