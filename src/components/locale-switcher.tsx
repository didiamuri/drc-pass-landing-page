'use client'
import {useId} from "react"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {i18n, Locale} from "@/i18n/i18n.config";
import {useParams, usePathname, useRouter} from "next/navigation";
import Image from "next/image";

const languages = [
    {
        id: 'en',
        label: 'English',
        img: '/en.png'
    },
    {
        id: 'fr',
        label: 'Français',
        img: '/fr.png',
    }
]

export default function LocaleSwitcher() {
    const id = useId();
    const router = useRouter()
    const pathname = usePathname()
    const param = useParams()

    const redirectedPathname = (locale: Locale) => {

        if (!pathname) return `/`

        const pathnameIsMissingLocale = i18n.locales.every(
            (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
        )

        if (pathnameIsMissingLocale) {
            if (locale === i18n.defaultLocale) return pathname
            return `/${locale}${pathname}`
        } else {
            if (locale === i18n.defaultLocale) {
                const segments = pathname.split('/')
                const isHome = segments.length === 2
                if (isHome) return `/`

                segments.splice(1, 1)
                return segments.join('/')
            }
            const segments = pathname.split('/')
            segments[1] = locale
            return segments.join('/')
        }
    }

    const onValueChange = (locale: Locale) => router.replace(redirectedPathname(locale));

    return (
        <div className="*:not-first:mt-2">
            <Select defaultValue={param.locale as string ?? i18n.defaultLocale} onValueChange={onValueChange}>
                <SelectTrigger id={id}
                               className="ps-2 [&>span]:flex rounded-none text-white border-slate-500 [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0 focus-visible:border-gray-500 focus-visible:ring-ring/0">
                    <SelectValue placeholder="Select"/>
                </SelectTrigger>
                <SelectContent
                    className="[&_*[role=option]]:ps-2 rounded-none [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
                    <SelectGroup>
                        {languages.map((item) => (
                            <SelectItem key={item.label} value={item.id}>
                                <Image
                                    className="size-5"
                                    src={item.img}
                                    alt={item.label}
                                    width={20}
                                    height={20}
                                />
                                <span className="truncate">{item.label}</span>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
