


"use client";

import { useEffect, useRef } from "react";
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
  target?: string;
}
const Hubspot = ({ portalId, formId, region, target }: HubspotProps) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the script is already loaded
    if (window.hbspt) {
      renderForm();
    } else {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      // script.async = true;
      script.defer = true; 
      script.onload = () => {
        renderForm();
      };
      document.body.appendChild(script);
    }

    function renderForm() {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${formRef.current.id}`,
        });
      }
    }

    return () => {
      // Clean up the form instance
      if (formRef.current) {
        formRef.current.innerHTML = '';
      }
    };
  }, [portalId, formId, region]);

  // Generate a unique ID for each form instance
  const uniqueId = `hubspotForm-${formId}`;

  return <div ref={formRef} id={uniqueId}></div>;
};

export default Hubspot;