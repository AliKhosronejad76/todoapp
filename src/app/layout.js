import localFont from "next/font/local";
import "./globals.css";
import Provider from "./context/Provider";



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <Provider>
        <body>
          {children}
        </body>
      </Provider>
      
    </html>
  );
}
