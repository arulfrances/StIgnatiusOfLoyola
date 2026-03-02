export interface ServiceTime {
  day: string;
  time: string;
}

// export interface WhatToExpectItem {
//   description: string;
// }


export interface LocationConfig {
  title: string;
  subtitle: string;
  hero: {
    backgroundImage: string;
  };
  location: {
    address: string;
    mapEmbedUrl: string;
    direction: string;
  };
  serviceTimes: ServiceTime[];
  directions: {
    enabled: boolean;
    car: string;
    bus: string;
    train: string;
  };
}

export const locationConfig: LocationConfig = {
  title: "Reach Us",
  subtitle: "",
  hero: {
    backgroundImage: "",
  },
  location: {
    address: "St. Loyola of Ignatius Church (A unit of Coimbatore Diocese Society | Akkarai Kodiveri | Gopi Taluka | Erode District | Pin code: 638454",
    mapEmbedUrl:"https://www.google.com/maps?q=11.4646823,77.3026139&hl=en&z=15&output=embed",
    direction:"https://www.google.com/maps/place/St.+Ignatius+of+Loyola+Church/@11.4646823,77.2978503,863m/data=!3m1!1e3!4m7!3m6!1s0x3ba9223123e3b0b9:0xeef0942658ced206!8m2!3d11.4646823!4d77.3026139!15sCh1TdC4gSWduYXRpdXMgb2YgTG95b2xhIENodXJjaJIBD2NhdGhvbGljX2NodXJjaKoBZhABKiAiHHN0IGlnbmF0aXVzIG9mIGxveW9sYSBjaHVyY2goADIeEAEiGvpvgmg6m4-QZpuvwF4c4FIOZ5n9j8OPvzDLMiAQAiIcc3QgaWduYXRpdXMgb2YgbG95b2xhIGNodXJjaOABAA!16s%2Fg%2F11f3wsx1rz?entry=tts&g_ep=EgoyMDI1MDkxMC4wIPu8ASoASAFQAw%3D%3D&skid=0ffe1caa-ec38-417e-b380-1edab471e7fb"
  },
  serviceTimes: [
    { day: "Main Parish: Weekdays (Monday to Saturday):", time: "6:30 AM" },
    { day: "Main Parish: Sundays", time: "8:30 AM" },
    { day: "Elathur : Sunday", time: "5:30 AM" },
    { day: "OG Palayam : Sunday", time: "6:45 AM" },
    { day: "Kurumanthur : Thursday", time: "6:00 PM" },
  ],
  directions: {
    enabled: true,
    car: "Drive to 7305 Afton Road, Woodbury, MN 55125",
    bus: "Take bus route to Woodbury",
    train: "Nearest train station information"
  },
};
