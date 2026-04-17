import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Lead Management System",
  description: "Professional lead tracking and email scheduling platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />

        {/* Page wrapper to center all pages including Leads page */}
        <div className="min-h-screen flex justify-center px-4 py-10">
          <div className="w-full max-w-6xl">
            {children}
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );

}
