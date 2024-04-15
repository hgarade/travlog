import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import ActiveSectionContextProvider from "./context/routeContext";

export const metadata = {
  title: "Travlog",
  description: "Travel website",
};
const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ActiveSectionContextProvider>
        <body className="relative gradient nunito">{children}</body>
      </ActiveSectionContextProvider>
    </html>
  );
}
