import React from 'react'
import IdLookupForm from '@/components/id-lookup-form'
import { Locale } from '@/i18n/i18n.config'
import { KeySquare, Shield, Users } from 'lucide-react'
import { getDictionary } from '@/i18n/dictionary'
import { Translation } from '@/types/translation'

const Page = async ({ params }: { params: Promise<{ locale: Locale }> }) => {

    const { locale } = await params;
    const dictionary: Translation = await getDictionary(locale);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-4 items-center">
                        {/* Left content */}

                        <div className="text-white">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                {dictionary.hero.title}
                            </h1>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">{dictionary.hero.option1}</h3>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">{dictionary.hero.option2}</h3>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <KeySquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">{dictionary.hero.option3}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right content - Form */}
                        <div className="flex justify-center lg:justify-end">
                            <IdLookupForm dictionary={dictionary} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {dictionary.features.title}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-xl bg-card shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">{dictionary.features.list[1].title}</h3>
                            <p className="text-muted-foreground">
                                {dictionary.features.list[1].description}
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-xl bg-card shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">{dictionary.features.list[2].title}</h3>
                            <p className="text-muted-foreground">
                                {dictionary.features.list[2].description}
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-xl bg-card shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">{dictionary.features.list[3].title}</h3>
                            <p className="text-muted-foreground">
                                {dictionary.features.list[3].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page