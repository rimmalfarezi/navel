import "./globals.css";

export const metadata = {
  title: "Navelle — Plan launches, not chaos",
  description:
    "Navelle helps small product teams plan, track, and ship launches without the spreadsheet chaos.",
  openGraph: {
    title: "Navelle",
    description:
      "Navelle helps small product teams plan, track, and ship launches without the spreadsheet chaos.",
  },
};

export const viewport = {
  themeColor: "#050816",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
