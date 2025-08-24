import React from 'react';
import { Translation } from '@/types/translation';
import { ExternalLink, Fingerprint } from 'lucide-react';
import LocaleSwitcher from './locale-switcher';

const Footer = ({ dictionary }: { dictionary: Translation }) => {
    return (
        <footer className="bg-[#161616] border-t-4 border-gouv-blue">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='flex items-center'>
                        <div className="flex items-center justify-start mb-4">
                            <img src="/flag-drc.png" alt="Logo" className="h-20 w-auto" />
                            <div className="ml-4">
                                <p className="text-xs font-bold text-gray-500 uppercase">{dictionary.header.title1} <br /> {dictionary.header.title2}  <br />{dictionary.header.title3}</p>
                                <div className='flex items-center gap-1'>
                                    <Fingerprint className='text-white size-8' />
                                    <h1 className="text-3xl font-bold text-white">RDC PASS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-base text-gray-500">
                            {dictionary.footer.description}
                        </p>
                        <div className="grid grid-cols-1 gap-8 mt-6">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">{dictionary.footer.links.title}</h4>
                                <ul className="space-y-2">
                                    <li><a href="https://republique.cd/" target='_blank' className="flex items-center text-gray-500 hover:underline">{dictionary.footer.links.lists[1]} <ExternalLink className='size-4 ml-1' /></a></li>
                                    <li><a href="https://www.pt-numerique.gouv.cd/" target='_blank' className="flex items-center text-gray-500 hover:underline">{dictionary.footer.links.lists[2]} <ExternalLink className='size-4 ml-1' /></a></li>
                                    <li><a href="https://www.pt-numerique.gouv.cd/" target='_blank' className="flex items-center text-gray-500 hover:underline">{dictionary.footer.links.lists[3]} <ExternalLink className='size-4 ml-1' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-8 py-6 text-sm text-gray-500 bg-white">
                    <ul className="grid grid-cols-1 md:grid-cols-2 space-y-2">
                        <li><img src="/logo.png" alt="Logo" className="h-20 w-auto" /></li>
                        <li><img src="/logo-drc.png" alt="Logo" className="h-20 w-auto" /></li>
                    </ul>
                </div>

                <div className="border-t mt-8 pt-6 space-y-4 text-start text-sm text-gray-500">
                    <ul className="grid grid-cols-2  md:grid-cols-5 space-y-2">
                        <li><a href="/" className="text-gray-500 hover:underline">{dictionary.footer.others.legale_notice}</a></li>
                        <li><a href="/" className="text-gray-500 hover:underline">{dictionary.footer.others.pricacy_policy}</a></li>
                        <li><a href="/" className="text-gray-500 hover:underline">{dictionary.footer.others.accessibility}</a></li>
                        <li><a href="/" className="text-gray-500 hover:underline">{dictionary.footer.others.faq}</a></li>
                        <li><a href="/" className="text-gray-500 hover:underline">{dictionary.footer.others.contact}</a></li>
                    </ul>


                    <div className='flex flex-col gap-2 md:flex-row md:items-center justify-start md:justify-between'>
                        <p>&copy; {new Date().getFullYear()} {dictionary.footer.copyright}</p>
                        <LocaleSwitcher />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
