import lta from '../image/lta-fixed.jpg'
import sapura from '../image/sapura.jpg'
import shopee from '../image/shopee.jpg'
import pwc from '../image/pwc.jpg'
import runnus from '../image/runnus.jpg'
import arrow from '../image/arrow-removed.png'
import hack from '../image/hack.jpg'
import fixed from '../image/fixed.jpg'
import { useRef } from 'react'

const data = [
    {
        img: pwc,
        category: 'Internship',
        title: "PwC South East Asia Consulting",
        description: 'Cyber & Forensics Risk Consultant,\nIdentity and Access Management (IAM)',
        date: "May'23"
    },
    {
        img: runnus,
        category: 'Project',
        title: "NUS Student's Sports Club",
        description: 'Design and update RunNUS 2022 website regularly during each phase of event',
        date: "Jun'22"
    },
    {
        img: shopee,
        category: 'Internship',
        title: 'Shopee Singapore',
        description: 'Automation Quality Assurance Engineer,\niOS Frontend UI Testing Team',
        date: "May'22"
    },
    {
        img: hack,
        category: 'Hackathon',
        title: 'Hack&Roll 2022',
        description: 'Built a telegram bot to give Mahjong Beginners advice within 24 hours',
        date: "Jan'22"
    },
    {
        img: sapura,
        category: 'Internship',
        title: 'Sapura Synergy Singapore',
        description: 'Student Internship on Education through E-Books and Technology',
        date: "Dec'16"
    },
    {
        img: lta,
        category: 'Award',
        title: 'LTA Engineering Challenge 2016',
        description: 'Merit Award — Singapore International Transport Congress and Exhibition (SITCE)',
        date: "Oct'16"
    },
]

function Experience() {

    const scrollref = useRef(null);

    const slideLeft = () => {
        var slider = scrollref.current
        slider.scrollLeft = slider.scrollLeft - 700;
    };

    const slideRight = () => {
        var slider = scrollref.current
        slider.scrollLeft = slider.scrollLeft + 700;
    };

    return (
        <div>
            <div className='flex flex-col h-[75vh]'>
                <h1 className='text-center text-4xl sm:text-6xl font-bold mb-2'>My Experience</h1>
                <div className='flex flex-row items-start sm:items-center w-full h-full justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hidden sm:flex w-10 h-10 transition opacity-50 hover:opacity-100 hover:-translate-y-1 hover:scale-125 hover:brightness-125 duration-200" onClick={slideLeft}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <div ref={scrollref} className='w-full sm:w-5/6 relative flex flex-row h-full sm:h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory sm:snap-proximity bg-[#2c3d4f] sm:m-8 shadow-[3px_3px_6px_0px_inset_rgb(27,37,47),-3px_-3px_6px_1px_inset_rgba(27,37,47,0.3)] rounded-lg select-text'>
                        <div className="absolute bg-local border-b-2 w-[2400px] sm:w-[3600px] h-5/6"></div>
                        {data.map((event, idx) => (
                            <div className="relative flex flex-col sm:items-end shrink-0 w-[60vw] sm:w-96 h-full snap-center mx-16">
                                <div className="flex w-full h-5/6 justify-center border-red-200 items-end">
                                    <img src={fixed} className="hidden select-none sm:flex w-32 h-32" alt='arrow'></img>
                                    <div className="relative flex flex-col h-5/6 max-h-96 mt-auto mb-8 w-[85%] sm:w-3/4 rounded-xl overflow-clip text-slate-600 text-xs shadow-[-5px_5px_rgb(253,126,20,0.3),-10px_10px_rgba(253,126,20,0.2),-15px_15px_rgba(253,126,20,0.1),-20px_20px_rgba(253,126,20,0.05),7.5px_0px_5px_0px_rgba(0,0,0,0.3)]">
                                        <img className='w-full h-3/5 opacity-60 select-none' src={event.img} alt="logo"></img>
                                        <div className='flex flex-col justify-center h-2/5 bg-gray-300 px-4'>
                                            <span className=''>{event.category}</span>
                                            <span className='sm:text-sm text-slate-800 font-bold py-1'>{event.title}</span>
                                            <span className='whitespace-pre-line'> {event.description}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='self-center sm:self-start sm:pl-12 pt-2 h-1/6'>
                                    <span className="font-medium text-4xl text-[#ea8e55]">{event.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hidden sm:flex w-10 h-10 transition opacity-50 hover:opacity-100 hover:-translate-y-1 hover:scale-125 hover:brightness-125 duration-200" onClick={slideRight}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <div className='flex sm:hidden flex-row items-center w-full justify-between sm:px-24 py-4 text-center'>
                    <div className='flex flex-wrap justify-center w-full text-l text-slate-200 items-center'>
                        <span className='pt-1'>Swipe left for more </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience;