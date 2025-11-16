
import {SidebarProvider} from "@/components/ui/sidebar";
export const metadata = {
    title: "VidPro Studio – Free Video Converter & Browser Video Editor (No Upload Needed)",
    description:
        "Fast, secure, and private video conversion and editing directly in your browser. Convert MP4, WebM, MOV and more. Trim, merge, compress, and edit videos instantly — no upload, no data collection.",
    keywords:
        "video converter, video editor, mp4 converter, webm to mp4, video compression, browser video editor, offline video tools, privacy video converter, client-side video processing, fast video converter, no upload video editor",
    authors: [{name: "VidPro Studio"}],
    creator: "VidPro Studio",
    publisher: "VidPro Studio",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://yourwebsite.com",
        siteName: "VidPro Studio",
        title:
            "VidPro Studio – Free Video Converter & Editor | 100% Private, No Upload Required",
        description:
            "Convert and edit videos instantly in your browser with full privacy. No uploads, no servers — your files stay on your device.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "VidPro Studio – Browser Video Converter & Editor",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "VidPro Studio – Free Video Converter & Editor | No Upload, Full Privacy",
        description:
            "Browser-based video conversion and editing. Convert, trim, merge, and compress videos without uploading. Fast and secure.",
        images: ["/twitter-image.jpg"],
        creator: "@yourtwitterhandle",
    },

    alternates: {
        canonical: "https://yourwebsite.com",
    },

    verification: {
        google: "your-google-verification-code",
    },

    category: "technology",

    other: {
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "theme-color": "#000000",
    },
};
export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "VidPro Studio",
    url: "https://yourwebsite.com",
    description:
        "Browser-based video converter and editor with full privacy. Convert, trim, merge, compress, and edit videos without uploading.",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All",
    softwareVersion: "1.0.0",

    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },

    featureList: [
        "Instant video format conversion",
        "Video trimming and merging",
        "Video compression",
        "Client-side editing (no uploads)",
        "High-speed processing",
        "Unlimited free usage",
        "Offline support in supported browsers"
    ],

    browserRequirements:
        "Works in modern browsers including Chrome, Firefox, Safari, and Edge",

    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "2410",
        bestRating: "5",
        worstRating: "1",
    },

    potentialAction: {
        "@type": "UseAction",
        target: "https://yourwebsite.com/app",
    }
};

export default function DashboardLayout(children) {

    return (
        <SidebarProvider>{children}</SidebarProvider>
    )
}