import click from "../../assets/images/svg/check_pricing_plan.svg";
import schedule from "../../assets/images/svg/features_schedule.svg"
import clients from "../../assets/images/svg/features_clients.svg"
import report from "../../assets/images/svg/features_report.svg"
import services from "../../assets/images/svg/features_service.svg"
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
  },
];
export const Feature = [
  {
    id: 1,
    heading: "Schedule",
    para: "Powerful and easy to use, book appointments for your team members and view a colour coded schedule, at a glance.", 
    img:schedule,
    
  },
  {
    id: 2,
    heading: "Clients & Pets",
    para: "Managing your Clients is effortless; Record Client details, view appointment history, breed, photos, medical notes, vet contact, groom note Client loyalty and more.",
    img:clients,
  },
  {
    id: 3,
    heading: "Reports",
    para: "Report and export client details, appointments, marketing, no shows and more..",
    img:report,
  },
  {
    id: 4,
    heading: "Services",
    para: "Add custom services to appointments, supplementary treatments, collection and drop offs, promotion packages and more.",
    img:services,
  },
];