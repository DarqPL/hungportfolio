import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.asciiName} Portfolio`,
    short_name: "DarqPL",
    description: "Backend and Web3 developer portfolio for Huynh Anh Hung.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#080808",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
