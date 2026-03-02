// import ConnectionForm from "@/components/ConnectionForm";
// import ContactModal from "@/components/ui/ContactModal";
import React from "react";


export const headerConfig = {
  logo: "St. Ignatius of Loyola Catholic Church",
  navItems: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Church",
      href: "/about",
    },

    //{ name: "Get Involved", href: "/get-involved" },

    { name: "Mass timings", href: "/mass-timings" },
   
    { name: "Contribute", href: "/give" },
    { name: "Events", href: "/events" },
    
    { name: "Contact", href: "/contact" },
  ],
  // buttons: [
  //   {
  //     enabled: true,
  //     name: "Connection Form",
  //     component: ConnectionForm,
  //     className:
  //       "bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-lg transition duration-300",
  //   },
  //   {
  //     enabled: true,
  //     name: "Contact Us",
  //     component: ContactModal,
  //     className:
  //       "bg-darkMossGreen text-white hover:bg-primary px-4 py-2 rounded-lg transition duration-300 ml-2",
  //   },
  // ],
  subheader: {
    enabled: true,
    className:
      "bg-primary text-white text-center py-2 font-medium tracking-wide",
    // Use JSX element to include clickable links
    content: (
      <>
        JOIN us for the Worship and support in contributing for the Church Development activities.{" "}
        <a
          href="/masstimings"
          className="underline hover:text-earthYellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mass Timings
        </a>{" "}
        |{" "}
        <a
          href="/give"
          className="underline hover:text-earthYellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute to Church
        </a>
      </>
    ),
  },
};
