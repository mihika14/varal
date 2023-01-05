import React from "react";
import PricingCards from "./pricingcards/pricingcards";

const Pricing = () => {
    return (
        <div className="pricing">
            <h1 className="pricingheading">
                Most popular affordable pricing per
                jurisdictions are brought to you to
                kick off your adventure
            </h1>
            <div className="cardspricing">
                <PricingCards />
            </div>


        </div>
    )
}

export default Pricing;