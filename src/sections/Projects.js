import PeerPrep from '../image/peer_prep.png'
import cnn from '../image/cnn.png'
import helpmemahjong from '../image/helpmemahjong.png'
import tracko from '../image/tracko.png'
import taskgo from '../image/taskgo.jpg'

function Projects() {
    return (
        <div>
            <div className='flex'>
                <h1 className='text-6xl font-bold text-center w-10/15'>My Projects</h1>
            </div>
            <div>
                <h1 className='text-4xl sm:text-5xl mt-16'>Peer Prep</h1>
                <div className='flex justify-center xl:justify-between flex-wrap mt-5 items-center'>
                    <div className='w-full xl:w-1/2'>
                        <div className='flex flex-col justify-between'>
                            <p>
                                Technical interview is crucial to every software engineer looking for a job. We built Peer Prep so that prior to their technical interview,
                                programmers can practice typical questions — with a peer! The program offers a real-time code editor, a sizable question pool that distributes
                                questions at random depending on the difficulty level selected, and a chat function that encourages collaboration between users who are matched.
                                I co-developed this application with three other team members.
                            </p>
                            <div>
                                <div className='my-5'>
                                    <span className='text-2xl font-semibold my-6'>Technology used</span>
                                </div>
                                <div className='flex flex-wrap gap-y-2 gap-x-4'>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Microservice</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>ReactJs</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Node.js</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Express.js</span></span>
                                    <span className='flex '><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Github CI/CD</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Axios</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Docker Compose</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>AWS</span></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a href='https://github.com/KengXIII/Peer-Prep' target="_blank" rel="noopener noreferrer">
                        <img src={PeerPrep} className='brightness-50 hover:brightness-100 hover:scale-110 transition-all duration-300 rounded-md items-end hover:shadow-2xl w-[512px] mt-8 xl:mt-0 ' alt="project"></img>
                    </a>
                </div>
            </div>

            <div>
                <h1 className='text-4xl sm:text-5xl mt-32 xl:text-right'>Sarcasm Detection using CNN</h1>
                <div className='flex justify-center xl:justify-between flex-wrap-reverse mt-5 items-center'>
                    <a href='https://www.kaggle.com/code/kengxiii/cnn-sarcasm/' target="_blank" rel="noopener noreferrer">
                        <img src={cnn} className='brightness-50 hover:brightness-100 hover:scale-110 transition-all duration-300 rounded-md items-end hover:shadow-2xl w-[512px] mt-8 xl:mt-0' alt="project"></img>
                    </a>
                    <div className='w-full xl:w-1/2 text-left xl:text-right'>
                        <div className='flex flex-col justify-between'>
                            <p>
                                Sarcasm means the use of irony to mock someone or something. This idea cannot be picked up by simple sentimental analysis model,
                                therefore requires careful detection. I explored the use of a deep learning CNN model to predict the likelyhood of an English sentence being sarcastic.
                                Using 1 million comments scraped from Reddit, I managed to trained a model that could perform with an accuracy of 70% on unseen instances.
                            </p>
                            <div>
                                <div className='my-5'>
                                    <span className='text-2xl font-semibold'>Technology used</span>
                                </div>
                                <div className='flex xl:flex-row-reverse flex-wrap gap-y-2 gap-x-4'>
                                    <span className='flex xl:flex-row-reverse'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Python</span></span>
                                    <span className='flex xl:flex-row-reverse'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>TensorFlow</span></span>
                                    <span className='flex xl:flex-row-reverse'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200' hidden></span></span>
                                    <span className='flex xl:flex-row-reverse'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200' hidden></span></span>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-4xl sm:text-5xl mt-32'>HelpMeMahjong</h1>
                <div className='flex justify-center xl:justify-between flex-wrap mt-5 items-center'>
                    <div className='w-full xl:w-1/2'>
                        <div className='flex flex-col justify-between'>
                            <p>
                                My team's Hack&Roll2022 hackathon entry, designed to help new Mahjong players get started.
                                HelpMeMahjong is a chatbot on Telegram that recommends the best next move based on the possible combinations that the user could create.
                                When users are listening to the last tile, the chatbot will alert them to the type to be on the lookout for.
                                This chatbot was created within 24-hours.
                            </p>
                            <div >
                                <div className='my-5'>
                                    <span className='text-2xl font-semibold'>Technology used</span>
                                </div>
                                <div className='flex flex-wrap gap-y-2 gap-x-4'>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200 '>Python</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>pyTelegramBotAPI</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Heroku</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200' hidden></span></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a href='https://devpost.com/software/helpmemahjong' target="_blank" rel="noopener noreferrer">
                        <img src={helpmemahjong} className='brightness-50 hover:brightness-100 hover:scale-110 transition-all duration-300 rounded-md items-end hover:shadow-2xl w-[512px] mt-8 xl:mt-0' alt="project"></img>
                    </a>
                </div>
            </div>

            <div>
                <h1 className='text-4xl sm:text-5xl mt-32 xl:text-right'>TrackO</h1>
                <div className='flex justify-center xl:justify-between flex-wrap-reverse mt-5 items-center'>
                    <a href='https://ay2122s1-cs2103t-f12-3.github.io/tp/' target="_blank" rel="noopener noreferrer">
                        <img src={tracko} className='brightness-50 hover:brightness-100 hover:scale-110 transition-all duration-300 rounded-md items-end hover:shadow-2xl w-[512px] mt-8 xl:mt-0' alt="project"></img>
                    </a>
                    <div className='w-full xl:w-1/2 text-left xl:text-right'>
                        <div className='flex flex-col justify-between'>
                            <p>
                                Track-O is a desktop application for managing your contact details.
                                Although it has a GUI, most of the user interactions happen using a CLI (Command Line Interface).
                                TrackO was created in response to a survey of commonly encountered problems by private tutors.
                                It is a one stop solution, allowing them to track their tutees' personal information, fees details and tutoring schedules.
                            </p>
                            <div>
                                <div className='my-5'>
                                    <span className='text-2xl font-semibold'>Technology used</span>
                                </div>
                                <div className='flex xl:flex-row-reverse flex-wrap gap-y-2 gap-x-4'>
                                    <span className='flex xl:flex-row-reverse'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Java</span></span>
                                    <span className='flex xl:flex-row-reverse'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>JavaFX</span></span>
                                    <span className='flex xl:flex-row-reverse'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200' hidden></span></span>
                                    <span className='flex xl:flex-row-reverse'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200' hidden></span></span>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-5xl mt-32'>TaskGo</h1>
                <div className='flex justify-center xl:justify-between flex-wrap mt-5 items-center'>
                    <div className='w-full xl:w-1/2'>
                        <div className='flex flex-col justify-between'>
                            <p>
                                My first attempt at building a full-stack web application was TaskGo.
                                Its basic design gives users the ease of being able to check their tasks from the web regardless of the device they have access to.
                                A scheduled email will be sent out when deadlines for unfinished tasks are approaching.
                                Users may choose to customize the ideal time before reminding themselves!
                            </p>
                            <div >
                                <div className='my-5'>
                                    <span className='text-2xl font-semibold'>Technology used</span>
                                </div>
                                <div className='flex flex-wrap gap-y-2 gap-x-4'>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>ReactJs</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Firebase</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Node.js</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Vercel</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Heroku</span></span>
                                    <span className='flex'><span className='w-max px-3 bg-gray-500 rounded-full text-gray-200'>Express.js</span></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a href='https://github.com/KengXIII/TaskGo' target="_blank" rel="noopener noreferrer">
                        <img src={taskgo} className='brightness-50 hover:brightness-100 hover:scale-110 transition-all duration-300 rounded-md items-end hover:shadow-2xl w-[512px] mt-8 xl:mt-0' alt="project"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;