import Home from "@/client.home.tsx/client";
import "./globals.css";

export const metadata = {
  title: "شركة الهدى للعقارات",
  description: "أفضل العقارات في الرياض وحلول سكنية وتجارية مميزة.",
  icons: {
    icon: "/favicon.ico", // Favicon اللي فيها حرف "هـ"
  },
  openGraph: {
    title: "شركة الهدى للعقارات",
    description: "أفضل العقارات في الرياض وحلول سكنية وتجارية مميزة.",
    url: "https://sharikat-alhuda.vercel.app/",
    siteName: "شركة الهدى للعقارات",
    images: [
      {
        url: "/favicon.ico", // ممكن نستخدم نفس Favicon أو صورة OG أكبر
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة الهدى للعقارات",
    description: "أفضل العقارات في الرياض وحلول سكنية وتجارية مميزة.",
    images: ["/favicon.ico"], // نفس الشيء، أو OG image أكبر
  },
};

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Home />
    </div>
  );
}
