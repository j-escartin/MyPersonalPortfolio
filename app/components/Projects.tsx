import Image from 'next/image';
import Szy from '../../lib/image/szy.png';
import PatientPortal from '../../lib/image/patientPortal.png';
import KnowYourNeighborhood from '../../lib/image/knowYourNeighborhood.png';

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

        <div className='flex flex-col md:flex-row items-center w-full gap-8 mt-4'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Image 
              src={KnowYourNeighborhood} 
              alt='Know Your Neighborhood' 
              width={400} 
              height={400}
              className='object-cover'
            />
          </div>
          
          <div className='w-full md:w-1/2 space-y-4'>
            <h3 className='text-base md:text-lg font-semibold text-center md:text-start'>Know-Your-Neighborhood</h3>
            <ul className='list-disc list-inside text-base md:text-lg text-justify space-y-2'>
              <li>Backend design and development using Spring Boot and JPA Framework.</li>
              <li>
                Developed APIs using Restful Web Services.
              </li>
              <li>
                Developed front-end applications using React JS.
              </li>
              <li>
                Identified existing APIs and their use in already developed applications
              </li>
              <li>
                <span className='font-semibold'> Technologies: </span> Spring Tool Suite, Visual Studio Code, MySQL WorkBench, Postman
              </li>   
            </ul>
            <div className='mt-2'>
              <a 
                href="https://github.com/j-escartin/Know-Your-Neighborhood?tab=readme-ov-file"
                target="_blank"
                rel='noopener noreferrer'
                className='text-white bg-darkGrey  text-base md:text-lg py-1 px-3 md:py-2 md:px-4 rounded-md text-center hover:bg-gray-700'
              >
                See Github Repo
              </a>
            </div>
            
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center w-full gap-8 mt-16'>
          <div className='mt-2'>
            <a 
              href="https://github.com/j-escartin?tab=repositories"
              target="_blank"
              rel='noopener noreferrer'
              className='text-white bg-darkGrey text-base md:text-lg py-1 px-3 md:py-2 md:px-4 rounded-md text-center hover:bg-gray-700'
            >
              See Other Projects
            </a>
          </div>
        </div>

        


      </div>
    </div>
  )
}