// components/Places.js
import React from 'react';
import Image from 'next/image';

const Places = () => {
  return (
    <section className="py-[50px] w-full h-full">
      <div className="relative w-full h-[207px]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-map-image z-[-1]"
          style={{ backgroundImage: `url(/images/timeline.svg)` }}
        />
        <div className="absolute top-[85px] left-3 bottom-auto w-full flex overflow-x-auto">
          <div className="flex-none w-[200px]">
            <div className="w-[20px] h-[24px] bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(/images/timeline-pin.png)` }} />
            <div className="table mt-[20px]">
              <div className="w-[45px] h-[45px] table-cell align-middle">
                <Image src="/images/test/gallery-1.jpg" alt="" width={45} height={45} className="w-full h-full object-cover" />
              </div>
              <div className="pl-[10px]">
                <p>Malindi</p>
                <span>August 2023</span>
              </div>
            </div>
          </div>
          {/* ... Add more timeline elements here */}
        </div>
      </div>
    </section>
  );
};

export default Places;
