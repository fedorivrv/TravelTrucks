import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "TravelTrucks",
  description: "Rental campers web app",
};
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        <main>
          <Toaster
            position="top-center"
            toastOptions={{
              className: "custom-toast",
              duration: 2000,
              style: {
                background: "#101828",
                color: "#fff",
                zIndex: 99999,
              },
            }}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
