import Ria from '@/components/About/Ria';
import Pageheader from '@/constants/Pageheader';
import { riaQuery } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanityFetch';
import { RiaProps } from '@/typings';
import React from 'react';

export async function page() {
  const fetchData = async () => {
    try {
      const aboutRia = await sanityFetch<RiaProps[]>({ query: riaQuery });
      console.log("Ria Query:", aboutRia);
      return aboutRia;
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return an empty array in case of an error
    }
  };

  const aboutRiaData = fetchData();

  return (
    <>
      {aboutRiaData.then((aboutRia) => (
        <>
          {aboutRia.map((item, index) => (
            <div key={index}>
              <Pageheader className='' title={item.name} />
              <Ria aboutRia={aboutRia} />
            </div>
          ))}
        </>
      ))}
    </>
  );
}

export default page;
