import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Razu Shrestha | CEO OF NEPATRONIX
        </title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
