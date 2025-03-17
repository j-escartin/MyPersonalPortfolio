export default function PortfolioNavigation(){
  return(
    <nav className='flex items-center justify-center border-y border-gray-200'>
      <ul className='flex w-full md:items-center md:justify-center text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide'>
        {
          [ 
            "About",
            "Skills",
            "Projects",
            "Experience",
            "Education",
            "Contact",
          ].map((item) => (
          <li key={item} className='menu-item'>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
          <li>
            <a 
              href='/resume.pdf'
              download="JamesVincentEscartin_Resume.pdf" 
              className="menu-item" 
            >
              Resume
            </a>
          </li>
      </ul> 
    </nav> 
  )
}