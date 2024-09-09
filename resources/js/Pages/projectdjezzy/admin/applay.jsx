import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import LogoLoader from './fullscreenload';

export default function AppLayout({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Show loader when navigation starts
        Inertia.on('start', () => setIsLoading(true));

        // Hide loader when navigation finishes
        Inertia.on('finish', () => setIsLoading(false));

        // Cleanup event listeners on component unmount
        return () => {
            Inertia.off('start');
            Inertia.off('finish');
        };
    }, []);

    return (
        <div>
            <LogoLoader isLoading={isLoading} />
            {children} {/* Render the main content */}
        </div>
    );
}