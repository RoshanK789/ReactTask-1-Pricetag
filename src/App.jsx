import React from 'react';
import PriceTag from './Components/CompPriceTag/PriceTag';

const App = () => {
  const data=[
    {
      Title:"Free",
      Price:"$0/month",
      user:"Single User",
      storage:"50GB Storage",
      publicproject:"Unlimited Public Project",
      access:"Community Access",
      pirvateproject:"Unlimetd Private Project",
      support:"Dedicated Phone Support",
      subdomain:"Free Subdomain",
      report:"Monthly Status Reports",
      check:"ri-check-fill",
      texts:"ri-close-fill text-secondary",
      text:"ri-close-fill text-muted",
    },
    {
      Title:"Plus",
      Price:"$9/month",
      user:"5 User",
      storage:"50GB Storage",
      publicproject:"Unlimited Public Project",
      access:"Community Access",
      pirvateproject:"Unlimetd Private Project",
      support:"Dedicated Phone Support",
      subdomain:"Free Subdomain",
      report:"Monthly Status Reports",
      check:"ri-check-fill",
      text:"ri-check-fill",
      texts:"ri-close-fill text-secondary",

    },
    {
      Title:"Pro",
      Price:"$49/month",
      user:"Single User",
      storage:"50GB Storage",
      publicproject:"Unlimited Public Project",
      access:"Community Access",
      pirvateproject:"Unlimetd Private Project",
      support:"Dedicated Phone Support",
      subdomain:"Free Subdomain",
      report:"Monthly Status Reports",
      check:"ri-check-fill",
      text:"ri-check-fill",
      texts:"ri-check-fill",
    }
  ]
  return (
    <div>
      <PriceTag data={data} />
    </div>
  );
};

export default App;