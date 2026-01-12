import Script from "next/script";
import "@nsftx/nxg-sports-micro-frontends-example-shared/style";
import { IGNITE_SDK_URL } from "@nsftx/nxg-sports-micro-frontends-example-shared/constants";
import IntegratorProvider from "./components/IntegratorProvider";

export const metadata = {
  title: "NXG Sports Micro-Frontends Next.js Example",
  description: "Example integration of NXG Sports micro-frontends with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script src={IGNITE_SDK_URL} strategy="beforeInteractive" />
        <IntegratorProvider>{children}</IntegratorProvider>
      </body>
    </html>
  );
}
