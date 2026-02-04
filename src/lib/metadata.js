
const BASE_URL = "https://nextjs-clinic-beta.vercel.app";


export function createMetadata({
    title,
    description,
    path,
    image = "/images/logo.png",
    keywords = [],
    locale,
}) {
    const url = `${BASE_URL}/${locale}${path}`;
    const fullTitle = `Elmed Hospital | ${title}`;
    const fullImage = `${BASE_URL}${image}`;

    return {
        title: fullTitle,
        description,
        keywords: ["Elmed Hospital", ...keywords],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: "Elmed Hospital",
            images: [
                {
                    url: fullImage,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            locale: locale === "az" ? "az" : "en",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [fullImage],
        },
    };
}
