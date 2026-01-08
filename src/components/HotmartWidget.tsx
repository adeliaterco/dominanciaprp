import { useEffect } from 'react';

declare global {
  interface Window {
    checkoutElements?: {
      init: (type: string) => {
        mount: (selector: string) => void;
      };
    };
  }
}

export const HotmartWidget = () => {
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.async = true;
      script.onload = () => {
        if (window.checkoutElements) {
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        }
      };
      document.body.appendChild(script);
    } else if (window.checkoutElements) {
      window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div id="hotmart-sales-funnel" />
    </div>
  );
};
