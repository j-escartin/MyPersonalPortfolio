export default function Education() {
  return (
    <div className='gen-container'>
      <div className='w-3/4 text-darkgrey border-b border-gray-200 py-10 text-justify'>
        <h1 className='title mb-6'>Education</h1>

        {/*Education 1*/}
        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-2'>University of Roehampton, United Kingdom</h3>
          <div className='pl-6'>
            <h4 className='text-md font-bold'>Bachelor of Science - BS, Computer Science</h4>
            <p className='text-sm text-gray-600'>Feb 2025 (Start)</p>
            <ul className='list-disc pl-5 mt-2 space-y-2'>
              <li>
                Currently Taking!
              </li>
            </ul>
          </div>
          
        </div>

        {/*Education 2*/}
        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-2'>Lithan Academy, Singapore</h3>
          <div className='pl-6'>
            <h4 className='text-md font-bold'>Higher National Diploma, Software Engineering</h4>
            <p className='text-sm text-gray-600'>Jun 2022 - Dec 2024</p>
            <ul className='list-disc pl-5 mt-2 space-y-2'>
              <li>
                The sole graduate from a cohort of 35 Software Engineering students, demonstrating resilience and dedication.
              </li>
            </ul>
          </div>
        </div>

        {/*Education 3*/}
        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-2'>Sister of Mary School- Boystown, Inc., Philippines </h3>
          <div className='pl-6'>
            <h4 className='text-md font-bold'>High School Diploma, Technical Vocational (Technical Drafting & Mechatronics)</h4>
            <p className='text-sm text-gray-600'>Jun 2016 - June 2022</p>
            <ul className='list-disc pl-5 mt-2 space-y-2'>
              <li>
                Graduated in the top 1% of the class, ranking 99th percentile out of 317 students.
              </li>
              <li>
                Won a bronze medal in the National Skills Competition for Mechatronics 
                Technology—competing against college-level participants while still in high school.
              </li>
              <li>
                Recognized with multiple awards, including Journalist of the Year, 
                Best in Mechatronics, and Best in Practical Research 3.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}