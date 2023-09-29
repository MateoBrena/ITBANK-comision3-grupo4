import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata = {
  title: 'Banco Rio',
  description: 'Banco Rio',
}

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
