export interface Translation {
    header: {
        title1: string;
        title2: string;
        title3: string;
    };
    menu: {
        home: string;
    };
    hero: {
        title: string;
        option1: string;
        option2: string;
        option3: string;
    };
    id_lookup: {
        title: string;
        description: string;
        placeholder: string;
        button_disabled: string;
        button_loading: string;
        message_title: string;
        message_description: string;
    };
    features: {
        title: string;
        description: string;
        list: {
            [key: string]: {
                title: string;
                description: string;
            };
        };
    };
    footer: {
        description: string;
        links: {
            title: string;
            lists: {
                [key: string]: string;
            };
        };
        others: {
            legale_notice: string;
            pricacy_policy: string;
            accessibility: string;
            faq: string;
            contact: string;
        };
        copyright: string;
    };
}
