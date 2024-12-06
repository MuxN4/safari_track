import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React from 'react'

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1000px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl rounded-5xl`}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image 
              src='/maps.svg'
              alt='map'
              width={28}
              height={28}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>
        </div>
        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image 
                className='inline-block h-10 w-10 rounded-full'
                src={url}
                key={url}
                alt='person'
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite 
          backgroundImage='bg-bg-img-1'
          title='Sand River Camp'
          subtitle='Mara, Talek'
          peopleJoined='50+ Joined'
        />
        <CampSite 
          backgroundImage='bg-bg-img-2'
          title='Mountain view'
          subtitle='Somewhere in the wild'
          peopleJoined='50+ Joined'
        />
      </div>
      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>Feeling lost</strong> and not knowing the way
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            Embarking on a climbing adventure in a new location can be daunting, with the fear of getting lost often looming large. That’s why we’re here—to guide and support you as you begin your journey into the great outdoors
          </p>
          <Image 
            src='/quote.svg'
            alt='quote'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Camp