import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Abacus Technocrats Pvt. Ltd.",
  description:
    "Engineering, Construction, and Project Management Experts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 flex flex-col min-h-screen">
        
        <Navbar />

        <main className="pt-20 flex-grow">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}