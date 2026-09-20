export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Jailbreak Wiki",
  shortName: "Jailbreak",
  logoText: "J",
  tagline: "Complete Guides, Codes, Vehicles & Heists",
  description: "Complete Jailbreak Wiki with Roblox codes, vehicle guides, heist strategies, police and criminal tips, updates, maps, and gameplay information for players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jailbreakgame.top",
  supportEmail: "support@jailbreakgame.top",
  gameUrl: "https://www.roblox.com/games/606849621/Jailbreak",
  heroVideoId: "FtXON4WbUCM", // Roblox Jailbreak official trailer
  social: {
    discord: "https://www.roblox.com/games/606849621/Jailbreak",
    youtube: "https://www.youtube.com/@badimo",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
