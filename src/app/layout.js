import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "VidPro Studio - Free Video Converter & Editor | No Upload Required",
    description: "Professional video converter and editing tools that run entirely in your browser. Convert, trim, merge, and edit videos without uploading - your files never leave your device. Fast, secure, and completely free.",
    keywords: "video converter, video editor, free video converter, online video editor, mp4 converter, video format converter, browser video editor, private video editing, no upload video tools, secure video converter, VidPro Studio",
    authors: [{name: "VidPro Studio"}],
    creator: "VidPro Studio",
    publisher: "VidPro Studio",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://yourwebsite.com",
        siteName: "VidPro Studio",
        title: "VidPro Studio - Free Video Converter & Editor | Privacy-First Video Tools",
        description: "Convert and edit videos directly in your browser. No uploads, no storage, total privacy. Your videos never leave your device.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Video Converter & Editor Tool",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "VidPro Studio - Free Video Converter & Editor | No Upload Required",
        description: "Professional video tools that run in your browser. Convert, edit, and process videos without uploading - complete privacy control.",
        images: ["/twitter-image.jpg"],
        creator: "@yourtwitterhandle",
    },
    alternates: {
        canonical: "https://yourwebsite.com",
    },
    verification: {
        google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
        // bing: "your-bing-verification-code",
    },
    category: "technology",
    other: {
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
    }
};

// Additional JSON-LD structured data for rich snippets
export const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'VidPro Studio',
    description: 'Privacy-focused video converter and editing tools that run entirely in your browser without uploading files',
    url: 'https://yourwebsite.com',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any (Browser-based)',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    featureList: [
        'Video format conversion',
        'Video editing and trimming',
        'No file upload required',
        'Complete privacy control',
        'Works offline',
        'Free unlimited use'
    ],
    browserRequirements: 'Requires JavaScript. Works in modern browsers (Chrome, Firefox, Safari, Edge)',
    softwareVersion: '1.0',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1250',
        bestRating: '5',
        worstRating: '1'
    }
};
export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
