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
          <li>
            <a 
              href='https://www.loom.com/share/675dc156e32a4899a1cc4abe7925b6f0?sid=f9059f67-b938-4144-9a50-1e9ae0a4d1d8'
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item" 
            >
              Watch Me
            </a>
          </li>
      </ul> 
    </nav> 
  )
}