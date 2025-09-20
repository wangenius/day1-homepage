import { RootProvider } from "fumadocs-ui/provider";

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>DAY1 - 多人在线/线下模拟创业游戏</title>
      </head>
      <body className={"min-h-screen"}>
        <Toaster theme="light" richColors position={"top-center"} />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
