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
    <div className="container bg-[#2D3E50] min-w-[100vw] min-h-[100vh] p-5 overflow-auto">
      <nav>
        <div className='max-w-7xl mx-auto py-5'>
          <div className='flex justify-center flex-wrap'>
            <a href='' className='flex drop-shadow-xl items-end mr-auto hover:drop-shadow-xl'>
              <img src={logo} style={{ width: "48px" }} alt="logo"></img>
              <span className='mx-3 text-2xl'><span className='text-[#ea8e55]'>Liao</span> Keng I</span>
            </a>
            <div className="flex justify-around items-end align-self-end text-[#E8EDF0] text-lg">
              <a href='#home' className='mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-2xl'>H</span>ome</a>
              <a href='#about' className='mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-2xl'>A</span>bout</a>
              <a href='#projects' className='mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-2xl'>P</span>rojects</a>
              <a href='#contact' className='mx-3 hover:text-[#D2601A] transition duration-300'><span className='text-2xl'>C</span>ontact</a>
              <a href='https://drive.google.com/file/d/1lCsdamjrRpsxbIPOMWaMqt0aAnDPedql/view' target="_blank" rel="noopener noreferrer" className='mx-3 px-3 py-0.5 rounded-md bg-gradient-to-br from-pink-700 to-orange-500 hover:bg-gradient-to-bl hover:drop-shadow-3xl '><span className='text-2xl'>R</span>esume</a>
            </div>
          </div>
        </div>
      </nav>
      <body className='h-[80vh]'>
        <div className='max-w-7xl mx-auto py-5 h-full'>
          <div className='flex h-full grow'>
            <div className='w-1/16'>
              <div className='flex h-full flex-col justify-end'>
                <a href='https://github.com/KengXIII' target="_blank" rel="noopener noreferrer" className='my-3'>
                  <img src={github} style={{ width: "32px" }} alt="logo"></img>
                </a>
                <a href='https://www.linkedin.com/in/liao-keng-i/' target="_blank" rel="noopener noreferrer" className='my-3'>
                  <img src={linkedin} style={{ width: "32px" }} alt="logo"></img>
                </a>
                <img className='my-3' src={line} style={{ width: "32px" }} alt="logo"></img>
                <img className='my-3 transform -scale-x-100' src={line} style={{ width: "32px" }} alt="logo"></img>
              </div>
            </div>
            <div className='w-full p-10 overflow-auto scroll-smooth'>
              <div id='home' className='pt-[20vh]'></div>
              <Home />
              <div id='about' className='pt-[10vh] mt-[30vh]'></div>
              <About />
              <div id='projects' className='pt-[10vh] mt-[30vh]'></div>
              <Projects />
              <div id='contact' className='pt-[10vh] mt-[50vh]'></div>
              <Contact />
            </div>
          </div>
        </div>
        <div className='min-h-[10vh] mx-20 border-t-2 text-xs pt-3 text-center'>
          Designed and developed by Keng I
          <div className='flex justify-center mt-2'>
            <div className='mx-3 text-gray-400'>React</div>
            <div className='mx-3 text-gray-400'>Tailwind CSS</div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default App;
