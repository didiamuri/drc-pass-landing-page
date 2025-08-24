import React from 'react';
import Image from 'next/image';
import { Translation } from '@/types/translation';
import { Fingerprint } from 'lucide-react';

const Header = ({dictionary}: { dictionary: Translation }) => {
    return (
        <header className="bg-[#161616] shadow-md">
            <div className='border-b border-gray-700 p-4'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        <Image src="/flag-drc.png" alt="Logo" className="h-20 w-auto" width={20} height={20} />
                        <div className="ml-4">
                            <p className="text-xs font-bold text-gray-500 uppercase">{dictionary.header.title1} <br /> {dictionary.header.title2}  <br />{dictionary.header.title3}</p>
                            <div className='flex items-center gap-1'>
                                <Fingerprint className='text-white size-8' />
                                <h1 className="text-3xl font-bold text-white">RDC PASS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 text-white'>
                <h1 className=''>
                    {dictionary.menu.home}
                </h1>
            </div>
        </header>
    );
};

export default Header;
