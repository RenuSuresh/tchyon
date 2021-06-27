import React from "react";
import MarketplaceSidebar from "../MarketplaceSidebar/MarketplaceSidebar";
import MarketplaceCards from "../MarketplaceCards/MarketplaceCards";
import "./MarketplaceContent.css";

function MarketplaceContent() {
  return (
    <div className="marketplace-content">
      <MarketplaceSidebar />
      <MarketplaceCards />
    </div>
  );
}

export default MarketplaceContent;
