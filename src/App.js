import logo from './image/KI_logo.png';
import github from './image/github.png'
import linkedin from './image/linkedin_fixed.png'
import line from './image/line.png'
import Home from './sections/Home.js'
import About from './sections/About.js'
import Projects from './sections/Projects.js'
import Contact from './sections/Contact.js'
import Experience from './sections/Experience.js'
import { useEffect, useRef, useState } from 'react';
import { sendEvent } from './tracker';

function App() {
  const [menu, setMenu] = useState(false)
  const btnRef = useRef()

  useEffect(() => {
    const closeMenu = e => {
      if (e.path[0] !== btnRef.current) {
        setMenu(false)
      }
    }
    document.body.addEventListener('click', closeMenu)
    document.body.addEventListener('touchmove', closeMenu)

    return () => {
      document.body.removeEventListener('click', closeMenu)
      document.body.removeEventListener('touchmove', closeMenu)
    }

  }, [])

  return (
    <div className="flex flex-col container bg-[#2D3E50] min-w-full h-screen p-5 overflow-auto">
      <nav className='h-[8%] min-h-[48px]'>
        <div className='max-w-7xl mx-auto py-2 items-end'>
          <div className='flex justify-between sm:justify-center flex-wrap gap-y-4 lg:gap-y-0'>
            <a href='' className='relative flex items-center sm:mr-auto group'>
              <div className='absolute inset-0 bg-[#D2601A] rounded-md blur-sm group-hover:blur-md transition duration-500'></div>
              <div className='relative flex items-center bg-[#273646] rounded-md overflow-hidden'>
                <img src={logo} style={{ width: "48px" }} alt="logo"></img>
                <span className='mx-3 text-2xl'><span className='text-[#ea8e55]'>Liao</span> Keng I</span>
              </div>
            </a>
            <div className='relative flex lg:hidden items-center' onClick={() => setMenu(!menu)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <div ref={btnRef} className='absolute inset-0 opacity-0 z-1'></div>
            </div>
            <div className="hidden lg:flex justify-around items-center align-self-end text-[#E8EDF0] text-xs sm:text-lg">
              <a href='#home' className='mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-base sm:text-2xl'>H</span>ome</a>
              <a href='#about' className='mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-base sm:text-2xl'>A</span>bout</a>
              <a href='#experience' className='mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-base sm:text-2xl'>E</span>xperience</a>
              <a href='#projects' className='mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-base sm:text-2xl'>P</span>rojects</a>
              <a href='#contact' className='mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-base sm:text-2xl'>C</span>ontact</a>
              <a href='https://drive.google.com/file/d/1gQfEb8izgkxJkZrSIdJwqdL9gvuGUAfd/view?usp=share_link' target="_blank" rel="noopener noreferrer" className='mx-3 px-3 py-0.5 rounded-md bg-gradient-to-br from-pink-700 to-orange-500 hover:bg-gradient-to-bl hover:drop-shadow-3xl' onClick={() => sendEvent('Resume')}><span className='text-base sm:text-2xl'>R</span>esume</a>
            </div>
            {menu ?
              <div id='menu' className='flex flex-col justify-center items-center absolute top-20 right-0 w-2/5 md:w-1/5 p-4 z-20 bg-slate-500 gap-y-1 shadow-md bg-opacity-80 rounded-md tracking-wider'>
                <a href='#home' className='w-full border-b border-slate-500 text-center'><span className='text-base sm:text-2xl'>H</span>ome</a>
                <a href='#about' className='w-full border-b border-slate-500 text-center'><span className='text-base sm:text-2xl'>A</span>bout</a>
                <a href='#experience' className='w-full border-b border-slate-500 text-center'><span className='text-base sm:text-2xl'>E</span>xperience</a>
                <a href='#projects' className='w-full border-b border-slate-500 text-center'><span className='text-base sm:text-2xl'>P</span>rojects</a>
                <a href='#contact' className='w-full border-b border-slate-500 text-center'><span className='text-base sm:text-2xl'>C</span>ontact</a>
                <a href='https://drive.google.com/file/d/1gQfEb8izgkxJkZrSIdJwqdL9gvuGUAfd/view?usp=share_link' target="_blank" rel="noopener noreferrer" className='px-3 py-0.5 rounded-md bg-gradient-to-br from-pink-700 to-orange-500 hover:bg-gradient-to-bl hover:drop-shadow-3xl' onClick={() => sendEvent('Resume Mobile')}><span className='text-base sm:text-2xl'>R</span>esume</a>
              </div>
              : null}
          </div>
        </div>
      </nav>
      <main className='h-[85%]'>
        <div className='max-w-7xl mx-auto py-4 h-full'>
          <div className='flex h-full grow'>
            <div className='w-[32px]'>
              <div className='flex h-full flex-col justify-end'>
                <a href='https://github.com/KengXIII' onClick={() => sendEvent('GitHub')} target="_blank" rel="noopener noreferrer" className='my-3'>
                  <img src={github} className="w-[24px] sm:w-[32px] transition hover:-translate-y-1 hover:scale-110 hover:brightness-125 duration-300" alt="logo"></img>
                </a>
                <a href='https://www.linkedin.com/in/liao-keng-i/' onClick={() => sendEvent('LinkedIn')} target="_blank" rel="noopener noreferrer" className='my-3'>
                  <img src={linkedin} className="w-[24px] sm:w-[32px] transition hover:-translate-y-1 hover:scale-110 hover:brightness-125 duration-300" alt="logo"></img>
                </a>
                <img className='my-3 w-[24px] sm:w-[32px]' src={line} alt="logo"></img>
                <img className='my-3 w-[24px] sm:w-[32px] transform -scale-x-100' src={line} alt="logo"></img>
              </div>
            </div>
            <div className='w-full p-6 overflow-auto scroll-smooth'>
              <div id='home' className='lg:pt-[18vh]'></div>
              <Home />
              <div id='about' className='scroll-mt-[8vh] mt-[24vh]'></div>
              <About />
              <div id='experience' className='mt-[20vh]'></div>
              <Experience />
              <div id='projects' className='scroll-mt-[8vh] mt-[20vh]'></div>
              <Projects />
              <div id='contact' className='scroll-mt-[16vh] mt-[30vh] '></div>
              <Contact />
              <div className="mb-[20vh]"></div>
            </div>
          </div>
        </div>
      </main>
      <nav className='max-w-7xl mx-auto w-full h-[7%]'>
        <div className='border-t-2 text-xs py-3 text-center'>
          Designed and developed by Keng I
          <div className='flex justify-center mt-1 text-gray-400 items-center'>
            <div>React </div>
            <div className='mx-3'>—</div>
            <div>Tailwind CSS</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App;
