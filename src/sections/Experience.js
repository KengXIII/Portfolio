import lta from '../image/lta-fixed.jpg'
import sapura from '../image/sapura.jpg'
import shopee from '../image/shopee.jpg'
import runnus from '../image/runnus.jpg'
import arrow from '../image/arrow-removed.png'
import hack from '../image/hack.jpg'
import fixed from '../image/fixed.jpg'

const data = [
    {
        img: lta,
        category: 'Award',
        title: 'LTA Engineering Challenge 2016',
        description: 'Merit Award — Singapore International Transport Congress and Exhibition (SITCE) 2016',
        date: "Oct'16"
    },
    {
        img: sapura,
        category: 'Internship',
        title: 'Sapura Synergy Singapore',
        description: 'Student Internship on Education through E-Books and Technology',
        date: "Dec'16"
    },
    {
        img: hack,
        category: 'Hackathon',
        title: 'Hack&Roll 2022',
        description: 'Built a telegram bot within 24 hours',
        date: "Jan'22"
    },
    {
        img: shopee,
        category: 'Internship',
        title: 'Shopee Singapore',
        description: 'Automation Quality Assurance Engineer,\niOS Frontend UI Testing Team',
        date: "May'22"
    },
    {
        img: runnus,
        category: 'Project',
        title: "NUS Student's Sports Club — RunNUS 2022",
        description: 'Design and update website regularly during each phase of event',
        date: "Jun'22"
    },
]


function Experience() {

    return (
        <div>
            <div className='flex flex-col h-[75vh]'>
                <h1 className='text-center text-4xl sm:text-6xl font-bold mb-2'>My Experience</h1>
                <div className='relative flex flex-row h-3/4 sm:h-full overflow-x-auto snap-x snap-mandatory sm:snap-proximity bg-[#2c3d4f] sm:m-8 shadow-[3px_3px_6px_0px_inset_rgb(36,50,64),-3px_-3px_6px_1px_inset_rgba(36,50,64,0.3)] rounded-lg select-none'>
                    <div className="absolute bg-local border-b-2 w-[2100px] sm:w-[3000px] h-5/6"></div>
                    {data.map((event, idx) => (
                        <div className="relative flex flex-col sm:items-end shrink-0 w-[60vw] sm:w-96 h-full snap-center mx-16">
                            <div className="flex w-full h-5/6 justify-center border-red-200 items-end">
                                <img src={fixed} className="hidden sm:flex w-32 h-32" alt='arrow'></img>
                                <div className="relative flex flex-col h-5/6 max-h-96 mt-auto mb-8 w-[85%] sm:w-3/4 rounded-xl overflow-clip text-slate-600 text-xs shadow-[-5px_5px_rgb(253,126,20,0.3),-10px_10px_rgba(253,126,20,0.2),-15px_15px_rgba(253,126,20,0.1),-20px_20px_rgba(253,126,20,0.05),7.5px_0px_5px_0px_rgba(0,0,0,0.3)] z-10">
                                    <img className='w-full h-3/5 opacity-60' src={event.img} alt="logo"></img>
                                    <div className='flex flex-col justify-center h-2/5 bg-gray-300 px-4'>
                                        <span className=''>{event.category}</span>
                                        <span className='sm:text-sm text-slate-800 font-bold py-1'>{event.title}</span>
                                        <span> {event.description}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='self-center sm:self-start sm:pl-12 pt-2 h-1/6'>
                                <span className="font-medium text-4xl text-[#ea8e55]">{event.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;