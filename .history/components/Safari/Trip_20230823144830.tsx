import React from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'

const Trip = () => {
  return (
    <section className='w-full h-full py-[120px]'>
        <Layout >
            <div className="w-full flex items-center flex-wrap ">
                <div className="flex-grow-0 flex-shrink-0 w-full lg:max-w-[33.3333%] h-full lg:pr-[15px]">
                    <div className="">
                        <h1 className='text-[30px] text-redLight font-nun font-[700] leading-[40px]'>THE TOP 4 DAY TRIPS</h1>
                        <span className="text-[26px] leading-[37px] pb-4 font-[300]  text-primaryText">We are Backpack Traveler, Melissa and Johnatan (that’s us!)</span>
                        <p className="text-primaryText font-[400] leading-[32px] text-[16px] mt-4"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Ad enim iracundia nam, alii at usu. Per eu soluta, sed non mauris vitae erat consequat auctor eu in elit.</p>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-[66.6666%] w-full h-full lg:pr-[15px]">
                    <div className="w-full h-full bg-redDark flex flex-wrap">
                        <div className="md:w-[50%] flex-shrink-0 flex-grow-0 ">
                            <Image src="/images/test/gallery-1.jpg" alt='img-1' width={300} height={300} className=''/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Trip