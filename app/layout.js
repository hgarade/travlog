import Head from "next/head";
import "./globals.css";
import ActiveSectionContextProvider from "./context/routeContext";

export const metadata = {
  title: "Travlog",
  description: "Travel website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Ubuntu&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ActiveSectionContextProvider>
        <body className="relative gradient">{children}</body>
      </ActiveSectionContextProvider>
    </html>
  );
}
