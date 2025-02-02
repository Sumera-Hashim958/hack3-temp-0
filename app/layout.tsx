import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";


const myfontfamily = Poppins ({
  subsets : ['latin'],
  weight: ["100","300", "700"],
})
const mythirdfont = Inter ({
  subsets : ['latin'],
  weight: ["400", "700"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myfontfamily.className} ${mythirdfont.className}`}>
          <Navbar/>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
