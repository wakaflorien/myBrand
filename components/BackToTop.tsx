import { Icon } from '@iconify/react';
import { Button } from '@material-tailwind/react';
import React, { useState, useEffect, FC } from 'react';

const BackToTop: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-2 p-3 bg-primary text-white rounded-full focus:outline-none focus:ring-1 focus:ring-primary
                     focus:ring-offset-2 transition-all duration-300 ease-in-out 
                     flex items-center justify-center group"
                    aria-label="Back to top"
                >
                    <Icon icon="material-symbols:arrow-upward-rounded" width="24" height="24" className='group-hover:animate-bounce' />
                </button>
            )}
        </>
    );
};

export default BackToTop;