export default function PortfolioNavigation(){
  return(
    <nav className='flex items-center justify-center md:border-y md:border-gray-200'>
      <ul className='flex w-full md:items-center md:justify-center text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide'>
        {["About", "Skills", "Project", "Experience", "Education"].map((item) => (
          <li key={item} className='menu-item'>{item}</li>
        ))}
      </ul> 
    </nav> 
  )
}