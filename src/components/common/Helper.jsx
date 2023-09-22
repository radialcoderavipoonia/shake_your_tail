import click from "../../assets/images/svg/check_pricing_plan.svg";
import schedule from "../../assets/images/svg/features_schedule.svg";
import clients from "../../assets/images/svg/features_clients.svg";
import report from "../../assets/images/svg/features_report.svg";
import services from "../../assets/images/svg/features_service.svg";
import About_1 from "../../assets/images/webp/about_1st.webp";
import About_2 from "../../assets/images/webp/about_2nd.webp";
import About_3 from "../../assets/images/webp/about_3rd.webp";
import About_4 from "../../assets/images/webp/about_4th.webp";
import bottom_img from "../../assets/images/svg/down_img_box.svg";
export const Pricing = [
  {
    id: 1,
    heading: "Free",
    para: "Great To Get You Started",
    per: "£0",
    month: "/per month",
    user: "Single User",
    resources: "Single Resource",
    clients: "150 Clients",
    appointments: "Unlimited Appointments",
    single: click,
    singleresource: click,
    onefifty: click,
    unlimited: click,
    conformation: "",
    email: "",
    online: "",
    electronic: "",
    mobile: "",
    rep: "",
    supp: "",
    aos: "fade-down",
    delay: "500",
  },
  {
    id: 2,
    heading: "Starter Plus",
    para: "Business Essentials",
    per: "£15",
    month: "/per month",
    user: "Single User",
    resources: "Single Resource",
    clients: "Single User",
    appointments: "Unlimited Appointments",
    breeds: "Custom Pet Breeds",
    remainders: "SMS Reminders",
    single: click,
    singleresource: click,
    onefifty: click,
    unlimited: click,
    custom: click,
    conformation: click,
    sms: "100 SMS Credits",
    email: "",
    online: "",
    electronic: "",
    mobile: "",
    rep: "",
    supp: "",
    include: "!block",
    aos: "fade-down",
    delay: "600",
  },
  {
    id: 3,
    heading: "Premier",
    para: "Ideal For Busy Businesses",
    per: "£25",
    month: "/per month",
    user: "Multi User",
    resources: "Multi Resource",
    clients: "Unlimited Clients",
    appointments: "Unlimited Appointments",
    breeds: "Custom Pet Breeds",
    remainders: "Email Confirmations & Reminders",
    marketing: "Email Marketing",
    booking: "Online Booking",
    contacts: "Electronic Contracts",
    app: "Mobile App",
    reporting: "Reporting",
    support: "Support",
    single: click,
    singleresource: click,
    onefifty: click,
    unlimited: click,
    custom: click,
    conformation: click,
    email: click,
    online: click,
    electronic: click,
    mobile: click,
    rep: click,
    supp: click,
    include: "!block",
    aos: "fade-down",
    delay: "700",
  },
  {
    id: 4,
    heading: "Premier Plus",
    para: "Unlimited Possibilities",
    per: "£37",
    month: "/per month",
    user: "Multi User",
    resources: "Multi Resource",
    clients: "Unlimited Clients",
    appointments: "Unlimited Appointments",
    breeds: "Custom Pet Breeds",
    remainders: "Email Confirmations & Reminders",
    marketing: "Email Marketing",
    booking: "Online Booking",
    contacts: "Electronic Contracts",
    app: "Mobile App",
    reporting: "Reporting",
    support: "Support",
    sms: "200 SMS Credits",
    single: click,
    singleresource: click,
    onefifty: click,
    unlimited: click,
    custom: click,
    conformation: click,
    email: click,
    online: click,
    electronic: click,
    mobile: click,
    rep: click,
    supp: click,
    include: "!block",
    aos: "fade-down",
    delay: "800",
  },
];
export const Feature = [
  {
    id: 1,
    heading: "Schedule",
    para: "Powerful and easy to use, book appointments for your team members and view a colour coded schedule, at a glance.",
    img: schedule,
    aos: "fade-down-right",
    delay: "400",
  },
  {
    id: 2,
    heading: "Clients & Pets",
    para: "Managing your Clients is effortless; Record Client details, view appointment history, breed, photos, medical notes, vet contact, groom note Client loyalty and more.",
    img: clients,
    hidden:"!block",
    aos: "fade-down-right",
    delay: "500",
  },
  {
    id: 3,
    heading: "Reports",
    para: "Report and export client details, appointments, marketing, no shows and more..",
    img: report,
    aos: "fade-down-right",
    delay: "600",
  },
  {
    id: 4,
    heading: "Services",
    para: "Add custom services to appointments, supplementary treatments, collection and drop offs, promotion packages and more.",
    img: services,
    aos: "fade-down-right",
    delay: "750",
  },
];
export const About_us = [
  {
    id: 1,
    img: About_1,

    heading: "Founded",
    para: "Dec 2009",
    p: "Founded in 2009 to support pet grooming industry to reduce the the administration burden of running a business.",
    aos: "fade-left",
    delay: "900",
  },
  {
    id: 2,
    img: About_2,
    clr: "text-[#9955AE]",
    heading: "Product Launch",
    para: "July 2010",
    p: "We released our first product 'Border' and made our first sales into 3 different countries.",
    bootom: bottom_img,
    aos: "fade-up",
    delay: "900",
  },
  {
    id: 3,
    img: About_3,
    clr: "text-[#EC8772]",
    heading: "Pet Schedule Released",
    para: "Dec 2012",
    p: "Our new Web based platform was created and released.",
    aos: "fade-down",
    delay: "900",
  },
  {
    id: 4,
    img: About_4,
    clr: "text-[#74BBBF]",
    heading: "Subscription Service",
    para: "Aug 2013",
    p: "We released our first premier subscription to the market",
    aos: "fade-right",
    delay: "900",
  },
];
