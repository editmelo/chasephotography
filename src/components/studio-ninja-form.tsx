"use client";

import Script from "next/script";

export default function StudioNinjaForm() {
  return (
    <>
      <iframe
        id="sn-form-wcgnv"
        src="https://app.studioninja.co/contactform/parser/0a800fc8-9dd8-18f4-819d-e5a1f55c7d47/0a800fc8-9dd8-18f4-819d-e5a1f5747d49"
        height={1176}
        allowFullScreen
        style={{ minWidth: "100%", maxWidth: "600px", border: 0 }}
      />
      <Script
        src="https://app.studioninja.co/client-assets/form-render/assets/scripts/iframeResizer.js"
        data-iframe-id="sn-form-wcgnv"
        strategy="afterInteractive"
      />
    </>
  );
}
