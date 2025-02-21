import Image from "next/image";
import JamesProfile from "../../lib/image/jamesProfile.jpg";

export default function GeneralProfile() {
  return(
    <div className='w-full flex justify-center py-10'>
      <div className='w-3/4 flex flex-col items-center gap-8'>
        <div className='flex justify-center'>
          <Image
            src={JamesProfile}
            alt="James Profile"
            height={350}
            width={350}
            className='rounded-lg object-cover'
          />
        </div>
        <div className='text-center'>
          <h1 className='text-xl md:text-2xl font-bold text-darkGrey'>Heyy! I’m James – Nice to meet you</h1>
          <p className='text-base md:text-lg text-darkGrey'>A software engineer and a writer</p>
          <q className='text-xs md:text-sm text-gray-400'>What I cannot create, I do not understand - Richard Feyman</q>
        </div>
      </div>
    </div>
  )
}