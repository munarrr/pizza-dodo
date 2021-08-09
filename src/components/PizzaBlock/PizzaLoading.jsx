import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => {
  return window.innerWidth > 375 ? (
    <ContentLoader
      speed={2}
      width={280}
      height={470}
      viewBox="0 0 280 470"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="pizza-block"
    >
      <circle cx="140" cy="135" r="130" />
      <rect x="40" y="280" rx="4" ry="4" width="200" height="24" />
      <rect x="0" y="324" rx="4" ry="4" width="280" height="84" />
      <rect x="0" y="428" rx="4" ry="4" width="90" height="27" />
      <rect x="127" y="415" rx="20" ry="20" width="150" height="44" />
    </ContentLoader>
  ) : (
    <ContentLoader
      speed={2}
      width={216}
      height={468}
      viewBox="0 0 216 468"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="pizza-block"
    >
      <circle cx="108" cy="113" r="108" />
      <rect x="28" y="240" rx="4" ry="4" width="160" height="24" />
      <rect x="0" y="282" rx="4" ry="4" width="280" height="84" />
      <rect x="0" y="376" rx="4" ry="4" width="90" height="27" />
      <rect x="0" y="415" rx="20" ry="20" width="216" height="44" />
    </ContentLoader>
  );
};

export default MyLoader;
