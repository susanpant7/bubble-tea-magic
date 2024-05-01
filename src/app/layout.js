import { Inter } from "next/font/google";
import "./globals.css";
import Navbar1 from "./components/navbar/Navbar1";
import Footer from "./components/footer/Footer";
import AuthProvider from "./components/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bubble Tea Magic App",
  description: "For Delicious Bubbles",
};

export default function RootLayout({ children }) {
  const toggleDarkMode = () => {
    console.log("toggled dark mode");
    localStorage.setItem("darkMode", lightMode);
  };
  return (
    <html lang="en">
      <body className={`${inter.className} dark-background`}>
        <AuthProvider>
          <Navbar1 />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
