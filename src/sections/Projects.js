import PeerPrep from '../image/peer_prep.png'
import cnn from '../image/cnn.png'
import helpmemahjong from '../image/helpmemahjong.png'
import tracko from '../image/tracko.png'
import taskgo from '../image/taskgo.jpg'
import spa from '../image/spa.jpg'

const data = [
    {
        proj_name: 'Static Program Analyser',
        proj_desc: `
            The SPA functions as a tool, systematically parsing raw code snippets to answer user queries regarding the 
            relationships between variables and statement numbers. In my project role, I specialised in developing the 
            design extractor component. This component extracts key information from the data structure after parsing 
            the raw code, subsequently forwarding it to the program knowledge base for future use. Additionally, I 
            contributed to the streamlining of test efforts through the implementation of automated script files and 
            CI workflows.
        `,
        proj_tech: ['C++', 'CMake', 'Python', 'Github Actions'],
        proj_img: spa,
    },
    {
        proj_name: 'Peer Prep',
        proj_desc: `
            Technical interview is crucial to every software engineer looking for a job.
            We built Peer Prep so that prior to their technical interview, programmers can
            practice typical questions — with a peer! The program offers a real-time code
            editor, a sizable question pool that distributes questions at random depending
            on the difficulty level selected, and a chat function that encourages
            collaboration between users who are matched. I co-developed this application
            with three other team members.
        `,
        proj_tech: ['Microservice', 'ReactJs', 'Node.js', 'Express.js', 'Github CI/CD', 'Axios', 'Docker Compose', 'AWS'],
        proj_img: PeerPrep,
    },
    {
        proj_name: 'Sarcasm Detection using CNN',
        proj_desc: `
            Sarcasm means the use of irony to mock someone or something. This idea cannot be picked up by simple 
            sentimental analysis model, therefore requires careful detection. I explored the use of a deep learning 
            CNN model to predict the likelyhood of an English sentence being sarcastic. Using 1 million comments 
            scraped from Reddit, I managed to trained a model that could perform with an accuracy of 70% on unseen 
            instances.
        `,
        proj_tech: ['Python', 'TensorFlow'],
        proj_img: cnn,
    },
    {
        proj_name: 'HelpMeMahjong',
        proj_desc: `
            My team's Hack&Roll2022 hackathon entry, designed to help new Mahjong players get started.
            HelpMeMahjong is a chatbot on Telegram that recommends the best next move based on the possible 
            combinations that the user could create. When users are listening to the last tile, the chatbot will 
            alert them to the type to be on the lookout for. This chatbot was created within 24-hours.
        `,
        proj_tech: ['Python', 'pyTelegramBotAPI', 'Heroku'],
        proj_img: helpmemahjong,
    },
    {
        proj_name: 'TrackO',
        proj_desc: `
            Track-O is a desktop application for managing your contact details.
            Although it has a GUI, most of the user interactions happen using a CLI (Command Line Interface).
            TrackO was created in response to a survey of commonly encountered problems by private tutors.
            It is a one stop solution, allowing them to track their tutees' personal information, fees details 
            and tutoring schedules.
        `,
        proj_tech: ['Java', 'JavaFX'],
        proj_img: tracko,
    },
    {
        proj_name: 'TaskGo',
        proj_desc: `
            My first attempt at building a full-stack web application was TaskGo.
            Its basic design gives users the ease of being able to check their tasks from the web regardless 
            of the device they have access to. A scheduled email will be sent out when deadlines for unfinished 
            tasks are approaching. Users may choose to customize the ideal time before reminding themselves.
        `,
        proj_tech: ['ReactJs', 'Firebase', 'Node.js', 'Vercel', 'Heroku', 'Express.js'],
        proj_img: taskgo,
    }
]

function Projects() {
    return (
        <div>
            <div className='flex'>
                <h1 className='text-6xl font-bold text-center w-10/15'>My Projects</h1>
            </div>
            <div>
                {data.map((event, idx) => (
                    idx % 2 === 0 ?
                        <div>
                            <h1 className='text-4xl sm:text-5xl mt-16'>{event.proj_name}</h1>
                            <div className='flex justify-center xl:justify-between flex-wrap mt-5 items-center'>
                                <div className='w-full xl:w-1/2'>
                                    <div className='flex flex-col justify-between'>
                                        <p>
                                            {event.proj_desc}
                                        </p>
                                        <div>
                                            <div className='my-5'>
                                                <span className='text-2xl font-semibold my-6'>Technology used</span>
                                            </div>
                                            <div className='flex flex-wrap gap-y-2 gap-x-4'>
                                                {event.proj_tech.map((item, index) => (
                                                    <span key={index} className='flex'>
                                                        <span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>{item}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <a href='https://github.com/KengXIII/Peer-Prep' target="_blank" rel="noopener noreferrer">
                                    <img src={event.proj_img} className='brightness-50 hover:brightness-100 hover:scale-110 transition-all duration-300 rounded-md items-end hover:shadow-2xl w-[512px] mt-8 xl:mt-0 ' alt="project"></img>
                                </a>
                            </div>
                        </div>
                        :
                        <div>
                            <h1 className='text-4xl sm:text-5xl mt-32 xl:text-right'>{event.proj_name}</h1>
                            <div className='flex justify-center xl:justify-between flex-wrap-reverse mt-5 items-center'>
                                <a href='https://www.kaggle.com/code/kengxiii/cnn-sarcasm/' target="_blank" rel="noopener noreferrer">
                                    <img src={event.proj_img} className='brightness-50 hover:brightness-100 hover:scale-110 transition-all duration-300 rounded-md items-end hover:shadow-2xl w-[512px] mt-8 xl:mt-0' alt="project"></img>
                                </a>
                                <div className='w-full xl:w-1/2 text-left xl:text-right'>
                                    <div className='flex flex-col justify-between'>
                                        <p>
                                            {event.proj_desc}
                                        </p>
                                        <div>
                                            <div className='my-5'>
                                                <span className='text-2xl font-semibold'>Technology used</span>
                                            </div>
                                            <div className='flex xl:flex-row-reverse flex-wrap gap-y-2 gap-x-4'>
                                                {event.proj_tech.map((item, index) => (
                                                    <span className='flex xl:flex-row-reverse'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>{item}</span></span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;