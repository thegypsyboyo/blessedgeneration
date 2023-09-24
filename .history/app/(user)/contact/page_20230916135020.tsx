import Contact from "@/components/Contact/Contact"
import Map from "@/constants/Map"
import Pageheader from "@/constants/Pageheader"
import { contactQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanityFetch";
import urlFor from "@/lib/urlFor";
import { ContactInfo } from "@/typings";

export const metadata = {
    title: 'Contact Us | Reach out to Blessed Generation for any inquiries',
    description: 'Reach out to Blessed Generation for any inquiries.',
}

const mapCenter = { lat: 51.5074, lng: -0.1278 }; // London, UK
  const markerLocations = [
    { lat: 51.5074, lng: -0.1278 }, // London
    { lat: 40.7128, lng: -74.0060 }, // New York
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
];
  
export default async function Page(){
  const contactinfo = await sanityFetch<ContactInfo[]>({ query: contactQuery});

  console.log("Contact info:", contactinfo)

  return (
    <>
    {contactinfo.map((item, index) =>(
    <div key={index}>
      <Pageheader title="Contuct us" bgImage={urlFor(item.image).url()}/>
      <Contact contactinfo={contactinfo}/>
      <Map center={mapCenter} zoom={10} markers={markerLocations} height="600px"/>
    </div>
    ))}
    </>
  )
}

// export default Page