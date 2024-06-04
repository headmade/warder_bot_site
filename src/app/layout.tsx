import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import "@fontsource-variable/manrope"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Channel Warder by HeadMade",
  description: "Антиспам-бот для борьбы со спамом в Telegram-каналах",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
          <AntdRegistry>
        <ConfigProvider>
            {children}
        </ConfigProvider>
          </AntdRegistry>
      </body>
    </html>
  );
}
