'use client';

import Link from 'next/link';
import {
    DashboardIcon,
    CodeIcon,
    ImageIcon,
    VideoIcon,
    SpeakerLoudIcon,
    ChatBubbleIcon,
    GearIcon,
} from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const routes = [
    {
        text: 'Dashboard',
        color: '',
        link: '/dashboard',
        icon: DashboardIcon,
    },
    {
        text: 'Image',
        color: '',
        link: '/image',
        icon: ImageIcon,
    },
    {
        text: 'Video',
        color: '',
        link: '/video',
        icon: VideoIcon,
    },
    {
        text: 'Music',
        color: '',
        link: '/music',
        icon: SpeakerLoudIcon,
    },
    {
        text: 'Conversion',
        color: '',
        link: '/conversion',
        icon: ChatBubbleIcon,
    },
    {
        text: 'Code',
        color: '',
        link: '/code',
        icon: CodeIcon,
    },
    {
        text: 'Settings',
        color: '',
        link: '/settings',
        icon: GearIcon,
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <aside className='bg-violet-500 h-full text-white px-4 py-4'>
            <div className='text-xl font-bold'>AI Toolbox</div>
            <div className='flex flex-col mt-8 space-y-2'>
                {routes.map(item => (
                    <Link
                        href={item.link}
                        key={item.link}
                        className={cn(
                            'font-semibold py-3 rounded-md hover:bg-white/20 px-2 transition-all duration-300 flex gap-2 items-center',
                            pathname === item.link ? 'bg-white/20' : ''
                        )}
                    >
                        <item.icon className='w-5 h-5' />
                        {item.text}
                    </Link>
                ))}
            </div>
        </aside>
    );
}
