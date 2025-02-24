import Image from 'next/image';
import Szy from '../../lib/image/szy.png';
import PatientPortal from '../../lib/image/patientPortal.png';

export default function Projects() {
  return(
    <div className='gen-container'>
      <div className='w-3/4 text-darkgrey border-b border-gray-200 py-10'>
        <div className='text-center'>
          <h1 className='title'>Projects</h1>
        </div>

        <div className='flex flex-col md:flex-row items-center w-full gap-8 mt-4'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Image 
              src={Szy} 
              alt='SmartZhongyi' 
              width={400} 
              height={400}
              className='object-cover'
            />
          </div>
          
          <div className='w-full md:w-1/2 space-y-4'>
            <h3 className='text-base md:text-lg font-semibold text-center md:text-start'>SmartZhongyi Traditional Chinese Medicine Application</h3>
            <ul className='list-disc list-inside text-base md:text-lg text-justify space-y-2'>
              <li>Developed further features such as encryption, totp, stock management, invoice  emailing.</li>
              <li>
                Improved application performance by 50% by optimizing database configurations 
                and implementing efficient algorithms for faster processing.
              </li>
              <li><span className='font-semibold'>Technologies: </span> Php, HTML, Bootstrap, JavaScript, jQuery, MySQL, Docker</li>
            </ul> 
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center w-full gap-8 mt-4'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Image 
              src={PatientPortal} 
              alt='Patient Portal' 
              width={400} 
              height={400}
              className='object-cover'
            />
          </div>
          
          <div className='w-full md:w-1/2 space-y-4'>
            <h3 className='text-base md:text-lg font-semibold text-center md:text-start'>Patient Portal for SmartZhongyi</h3>
            <ul className='list-disc list-inside text-base md:text-lg text-justify space-y-2'>
              <li>Initiated it&apos;s development as a way for patients to monitor their records, request and view appointments, retrieve receipts, etc.</li>
              <li>
                Prioritized responsive design to enhance accessibility across different devices, improving the portal&apos;s user-friendliness.
              </li>
              <li>
                <span className='font-semibold'> Technologies: </span> PHP, Slim Micro Framework (RESTful API), Tailwind CSS, Next.js
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}