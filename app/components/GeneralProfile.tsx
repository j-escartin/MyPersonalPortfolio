import Image from "next/image";
import JamesProfile from "../../lib/image/jamesProfile.jpg";

export default function GeneralProfile() {
  return(
    <div className='gen-container'>
      <div className='w-3/4 flex flex-col items-center py-10 gap-8'>
        <div className='flex justify-center'>
          <Image
            src={JamesProfile}
            alt="James Profile"
            height={450}
            width={450}
            className='rounded-lg object-cover'
          />
        </div>
        <div className='text-center'>
          <h1 className='title text-darkGrey'>Heyy! I&apos;m James – Nice to meet you 👋</h1>
          <p className='text-base md:text-lg text-darkGrey'>A software developer and writer</p>
          <q className='text-xs md:text-sm text-gray-400'>What I cannot create, I do not understand - Richard Feyman</q>
        </div>
      </div>
    </div>
  )
}