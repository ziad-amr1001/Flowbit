import "./globals.css";

export const metadata = {
  title: "flowbit",
  description: "Confident monochrome launchpad for Flowbit."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
