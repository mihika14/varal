import React from "react";
import Cards1 from "./cards1/Cards1";
import { Card } from "semantic-ui-react";

const Services = () => {
    return (
        <div className="services">
            <h2 className="serviceheading">Dedicated to our mission we are</h2>
            <p className="servicecontent">Our services include Company Formation & Renewals,
                Trust & Fiduciary, Tax Residency Setup With Family, Bank
                Accounts, Remote Management, Stock Trading
                Platforms, Ownership Solutions</p>

            <div className="cards1"> <Cards1 /></div>
            <p className="subcontent1">Learn the ways in which you can benefit
                from a UAE/Offshore Company. Then get
                started on fulfilling your UAE dream.</p>
            <h6 className="subcontent1">Claim a Free Quote</h6>
            <div className="advice">
                <Card
                    image='/images/avatar/large/elliot.jpg'
                    header='Advice & Guidance'
                    description='All activities in the UAE are licensed Whether manufacturing, finance,trading, marketing, consultancy or restaurants.In some countries only  manufacturing is licensed.In others there is a threshold below which business are encouraged.Get our insightfull guidance today.'
                />
            </div>
            <div className="bankaccount">
                <Card
                    image='/images/avatar/large/elliot.jpg'
                    header='Bank Account Setup'
                    description='There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent s strategies and have changed local requirements overnight in the past.But we are here to help you.'
                />
            </div>
            <div className="registration">
                <Card
                    image='/images/avatar/large/elliot.jpg'
                    header='Bank Account Setup'
                    description='Several documents must be prepared to start the process of registering a new company in the  United Arab Emirates. Be it a Dubai local company, a free zone one or an  offshore entity. Your registered agent is dedicated to get this done for you for a seamless process'
                />
            </div>
            <div className="visa">
                <Card
                    image='/images/avatar/large/elliot.jpg'
                    header='UAE Company Visas'
                    description='Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move  with you. All the paperwork is done on your behalf smoothly so that you  may only focus on doing what matters most to you.'
                />
            </div>
        </div>

    )
}

export default Services;