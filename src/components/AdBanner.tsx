import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9931297715644287"
      data-ad-slot="1539933446"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  );
};

export default AdBanner;