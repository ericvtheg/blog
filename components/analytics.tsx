"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";

function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
}

export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <GoogleAnalytics />
    </>
  );
}

const GA_TRACKING_ID = "G-5YSEFPTG53";
