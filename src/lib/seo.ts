import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { sameAsLinks } from "@/data/social";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://hungportfolio.dev";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

export const defaultDescription =
  "Backend developer based in Ho Chi Minh City, focused on Java, Spring Boot, backend systems, and Web3 development.";

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = "/opengraph-image",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
    },
    authors: [{ name: profile.asciiName, url: SITE_URL }],
    creator: profile.asciiName,
    openGraph: {
      title: title ?? `${profile.asciiName} — Backend & Web3 Developer`,
      description,
      url,
      siteName: `${profile.asciiName} Portfolio`,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${profile.asciiName} — Backend Developer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? `${profile.asciiName} — Backend & Web3 Developer`,
      description,
      images: [imageUrl],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.asciiName,
    alternateName: [profile.name, profile.handle, ...profile.seoNames],
    url: SITE_URL,
    jobTitle: [profile.title, profile.secondaryTitle],
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    sameAs: sameAsLinks,
  };
}
