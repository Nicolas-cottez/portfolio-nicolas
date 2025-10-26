import "./globals.css";

export const metadata = {
  title: "Nicolas Cottez-Abrate — Data & AI Engineer",
  description: "Portfolio and CV — Data, ML, MLOps, and AI projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070b12] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
