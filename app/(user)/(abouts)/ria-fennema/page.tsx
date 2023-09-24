import Ria from '@/components/About/Ria'
import Pageheader from '@/constants/Pageheader'
import { riaQuery } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanityFetch';
import urlFor from '@/lib/urlFor';
import { RiaProps } from '@/typings';
import React, { useEffect, useState } from 'react'

// export async function page () {
//   const aboutRia = await sanityFetch<RiaProps[]>({ query: riaQuery });
//   console.log("Ria Query:", aboutRia)

 

//   return (
//     <>
//     {aboutRia.map((item, index) => (
//     <div key={index}>
//         <Pageheader className='' title={item.name}/>
//         <Ria aboutRia={aboutRia}/>
//     </div>

//     ))}
//     </>
//   )
// }

// export default page


const RiaPage: React.FC = () => {
  const [aboutRia, setAboutRia] = useState<RiaProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sanityFetch<RiaProps[]>({ query: riaQuery });
        setAboutRia(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {aboutRia.map((item, index) => (
        <div key={index}>
          <Pageheader className='' title={item.name} />
          <Ria aboutRia={aboutRia} />
        </div>
      ))}
    </>
  );
};

export default RiaPage;