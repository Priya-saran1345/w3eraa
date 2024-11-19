"use client";
import { useEffect } from "react";

// Extend the Window interface to include hbspt
declare global {
  interface Window {
    hbspt: any;
  }
}

interface HubspotProps {
  portalId: string;
  formId: string;
  region: string;
}

const Hubspot = ({ portalId, formId, region }: HubspotProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: "#hubspotForm",
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the script to prevent duplicates
      const existingScript = document.querySelector(
        'script[src="https://js.hsforms.net/forms/v2.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [portalId, formId, region]);

  return <div id="hubspotForm"></div>;
};

export default Hubspot;
