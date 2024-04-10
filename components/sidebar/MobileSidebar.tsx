'use client';

import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';

export default function MobileNav() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='ghost'>
                    <HamburgerMenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className='p-0'>
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}
