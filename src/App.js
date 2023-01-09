import logo from './image/KI_logo.png';
import github from './image/github.png'
import linkedin from './image/linkedin_fixed.png'
import line from './image/line.png'
import Home from './sections/Home.js'
import About from './sections/About.js'
import Projects from './sections/Projects.js'
import Contact from './sections/Contact.js'


function App() {
  return (
    <div className="container bg-[#2D3E50] min-w-full min-h-screen p-5 overflow-auto">
      <nav>
        <div className='max-w-7xl mx-auto py-5'>
          <div className='flex justify-center flex-wrap'>
            <a href='' className='flex drop-shadow-xl items-end sm:mr-auto hover:drop-shadow-xl'>
              <img src={logo} style={{ width: "48px" }} alt="logo"></img>
              <span className='mx-3 text-2xl'><span className='text-[#ea8e55]'>Liao</span> Keng I</span>
            </a>
            <div className="flex justify-around items-center align-self-end text-[#E8EDF0] text-sm sm:text-lg">
              <a href='#home' className='mx-2 sm:mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-base sm:text-2xl'>H</span>ome</a>
              <a href='#about' className='mx-2 mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-base sm:text-2xl'>A</span>bout</a>
              <a href='#projects' className='mx-2 mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-base sm:text-2xl'>P</span>rojects</a>
              <a href='#contact' className='mx-2 mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-base sm:text-2xl'>C</span>ontact</a>
              <a href='https://drive.google.com/file/d/1lCsdamjrRpsxbIPOMWaMqt0aAnDPedql/view' target="_blank" rel="noopener noreferrer" className='mx-3 px-3 py-0.5 rounded-md bg-gradient-to-br from-pink-700 to-orange-500 hover:bg-gradient-to-bl hover:drop-shadow-3xl '><span className='text-base sm:text-2xl'>R</span>esume</a>
            </div>
          </div>
        </div>
      </nav>
      <body className='h-[75vh]'>
        <div className='max-w-7xl mx-auto py-5 h-full'>
          <div className='flex h-full grow'>
            <div className='w-max'>
              <div className='flex h-full flex-col justify-end'>
                <a href='https://github.com/KengXIII' target="_blank" rel="noopener noreferrer" className='my-3'>
                  <img src={github} className="w-[24px] sm:w-[32px]" alt="logo"></img>
                </a>
                <a href='https://www.linkedin.com/in/liao-keng-i/' target="_blank" rel="noopener noreferrer" className='my-3'>
                  <img src={linkedin} className="w-[24px] sm:w-[32px]" alt="logo"></img>
                </a>
                <img className='my-3 w-[24px] sm:w-[32px]' src={line} alt="logo"></img>
                <img className='my-3 w-[24px] sm:w-[32px] transform -scale-x-100' src={line} alt="logo"></img>
              </div>
            </div>
            <div className='w-full p-10 overflow-auto scroll-smooth'>
              <div id='home' className='lg:pt-[15vh]'></div>
              <Home />
              <div id='about' className='pt-[8vh] mt-[20vh]'></div>
              <About />
              <div id='projects' className='pt-[8vh] mt-[20vh]'></div>
              <Projects />
              <div id='contact' className='pt-[10vh] mt-[50vh]'></div>
              <Contact />
            </div>
          </div>
        </div>

      </body>
      <nav >
        <div className='mx-4 border-t-2 text-xs pt-5 text-center'>
          Designed and developed by Keng I
          <div className='flex justify-center mt-2 text-gray-400 items-center'>
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
