import Image from 'next/image';
import JavaSVG from  '../../lib/image/Java.svg';
import PhpSVG from  '../../lib/image/PHP.svg';
import JavaScriptSVG from  '../../lib/image/JavaScript.svg';
import TailwindSVG from '../../lib/image/TailwindCSS.svg';
import NextJSSVG from '../../lib/image/Next.js.svg';
import MySQlSVG from '../../lib/image/MySQL.svg';
import DockerSVG from '../../lib/image/Docker.svg';
import PythonSVG from '../../lib/image/Python.svg';
import CSharpSVG from '../../lib/image/CSharp.svg';
import CSVG from '../../lib/image/C.svg';
import AngularSVG from '../../lib/image/Angular.svg';

export default function Skills() {
  return (
    <div className='gen-container'>
      <div className='w-3/4 border-b border-gray-200 py-10'>
        <div className='text-darkgrey'>
          <h1 className='title text-center'>Skills</h1>
          <h3 className='mt-4 text-lg md:text-xl'>I&apos;m decent at 😉</h3>
        </div>
        
        <div className='icon-container'>
          {[
            { src: JavaSVG, alt: 'Java'},
            { src: PhpSVG, alt: 'Php'},
            { src: JavaScriptSVG, alt: 'JavaScript'},
            { src: TailwindSVG, alt: 'TailwindCSS'},
            { src: NextJSSVG, alt: 'NextJS'},
            { src: MySQlSVG, alt: 'MySQL'},
            { src: DockerSVG, alt: 'Docker'}
          ].map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={70}
              height={70}
              className='icons-size'
            />
          ))}
        </div>

        <div className='text-left text-darkgrey mt-4'>
          <h3 className='text-lg md:text-xl'>Things I&apos;ve touched 😃</h3>
        </div>

        <div className='icon-container'>
          {[
            { src: PythonSVG, alt: 'Python'},
            { src: CSVG, alt: 'C'},
            { src: CSharpSVG, alt: 'C#'},
            { src: AngularSVG, alt: 'Angular'}
          ].map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={70}
              height={70}
              className="icons-size"
            />
          ))}
        </div>
      </div>
    </div>
  )
}