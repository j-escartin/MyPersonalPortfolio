export default function Experience() {
  return (
    <div className='gen-container'>
      <div className='w-3/4 text-darkgrey border-b border-gray-200 py-10 text-justify'>
        <h1 className='title mb-6'>Experience</h1>

        {/*Job 1*/}
        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-2'>Smmile Digital, Singapore</h3>
          <div className='pl-6'>
            <h4 className='text-base font-bold'>Software Engineer</h4>
            <p className='text-sm text-gray-600'>October 2023 - Present</p>
            <ul className='list-disc pl-5 mt-2 space-y-2'>
              <li>
                Developed and maintained key features for SmartZhongYi Traditional Chinese Medicine Application,
                including a patient portal, enhanced security with TOTP, and data encryption.
              </li>
              <li>
                Improved application performance by 50% by optimizing database configurations 
                and implementing efficient algorithms for faster processing.
              </li>
            </ul>
          </div>
          
        </div>

        {/*Job 2*/}
        <div>
          <div className='pl-6'>
            <h4 className='text-base font-bold'>Software Engineer Intern</h4>
            <p className='text-sm text-gray-600'>July 2023 - September 2023</p>
            <ul className='list-disc pl-5 mt-2 space-y-2'>
              <li>
                Enhanced and maintained key features like stock management 
                across multiple versions (PHP & MySQL) of the SmartZhongYi Application.
              </li>
              <li>
                Designed, built, and optimized WordPress websites 
                for better performance and user experience.
              </li>
              <li>
                Explored and integrated emerging technologies like ElectronJs,
                React and Docker, driving innovation and efficiency within the company.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}