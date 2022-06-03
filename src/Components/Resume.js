import './Resume.css';
import face from '../Images/face.jpg'
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

// Any section listing more than 2 items or needing future updating I used props

// Array for WorkExperience props
const workExp = [
    {
        position: 'Full Stack Web Developer',
        timeline: '2022 - Present',
        where: 'Freelance',
        skills: 'During my time as a crypto trader, I realised that if I want to take my career in this space further, ' +
            'I need to upskill by becoming a developer. There is a massive edge in having this skill ' +
            'so I am heads down learning how to code in 2022.'
    },
    {
        position: 'Cryptocurrency Investor & Trader',
        timeline: '2017 - Present',
        where: 'Part-time',
        skills: 'I started focusing more seriously on the Crypto space in 2017. I have kept up with latest developments ' +
            'in the space as well as trading & investing in my spare time. I have connected with many other traders in the ' +
            'space and I have been quite successful in fine tuning my edge. The skills that I have acquired over the years ' +
            'include on chain research (using Etherscan mainly, but also proficient in using Nansen & other on chain analytics ' +
            'tools), keeping up with the accounts of influential people on chain and on social media platforms, studying the ' +
            'effects of macro economics on the crypto market, and mostly just ' +
            'staying informed and hungry for self improvement has allowed me to be successful in this space. '
    },
    {
        position: 'Sales/Accounts/Business Development',
        timeline: '2018 - 2022',
        where: 'Cathrich Procurement & Export',
        skills: 'I wanted to dedicate more time to crypto research & trading so I took an office job which allowed me to be flexible ' +
            'with my time. I learnt many valuable skills working at Cathrich. I managed many portfolios of clients and was responsible ' +
            'for procuring their needed material as well as the logistics in getting the material to them. I was also responsible for ' +
            'maintaining these relationships and building new ones. I also handled the accounts department.'
    },
    {
        position: 'Location Sound Mixer/Recordist',
        timeline: '2013 - 2018',
        where: 'Freelance',
        skills: 'My passion for a technical position brought me back to Sound. I worked on many local film & ' +
            'television productions as the head of sound. I learnt how to lead a team.'
    },
    {
        position: 'Office Assistant',
        timeline: '2012 - 2013',
        where: 'Red Flag Design & Marketing',
        skills: 'To expand my knowledge base I took a job at a PR firm. Here I honed in on my organisational skills, ' +
            'flexibility and marketing/PR.'
    },
    {
        position: 'Assistant Final Mix Engineer',
        timeline: '2012',
        where: 'The Wild',
        skills: 'My first official job working underneath the final mix engineer, preparing his daily mixes. ' +
            'Learnt how to work as part of a team.'
    },
    {
        position: 'Final Mix Engineer',
        timeline: '2011 - 2012',
        where: '344 Studios',
        skills: 'This was an intern position, where I put in many hours during my studies to master ' +
            'the craft of final mixing. I mostly worked on commercials for television & radio.'
    },
]

// Create array for Skills props
const skills = [
    'HTML', 'CSS', 'Javascript', 'Bootstrap', 'JQuery', 'React', 'Cryptocurrency Researching',
    'Cryptocurrency Trading & Investing', 'Forex Trading', 'Location Sound Mixing & Recording',
    'Audio Post Production'
]

// Main page layout
function Resume() {
    return (
        <div className={'container'}>
            <div className={'row'}>

                {/* Image & Basic Info Div */}
                <div className={'col-lg-4'}>
                    <div className={'imgDiv col-lg-12 text-center'}>

                        {/* Image, name & description */}
                        <img src={face} alt={'Robyn Lindsay'} className={'img-fluid rounded-circle face'}/>
                        <h3 className={'pt-3'}>Robyn Lindsay</h3>
                        <h4 className={'pt-2'}>Full Stack Developer</h4>
                        <br/>
                        <hr/>

                        {/* Location & Email */}
                        <h5 className={'pt-2'}><i className={"fa-solid fa-location-dot"}></i> Johannesburg, South Africa
                        </h5>
                        <h5><i className="fa-solid fa-envelope"></i><a
                            href={'mailto:robynlindsay12@gmail.com'}> robynlindsay12@gmail.com</a></h5>
                        <br/>
                        <hr/>

                        {/* Links to Github & LinkedIn */}
                        <div className={'d-print-inline-block pb-2'}>
                            <a className={'d-print-inline m-2'} href={'https://github.com/Robyn91/'} target={'_blank'}
                               rel="noreferrer"><i className="fa-brands fa-github fa-2x"></i></a>
                            <a className={'d-print-inline m-2'}
                               href={'https://www.linkedin.com/in/robyn-lindsay-92567047/'} target={'_blank'}
                               rel={'noreferrer'}><i
                                className="fa-brands fa-linkedin fa-2x"></i></a>
                        </div>

                        {/* How I built this site */}
                        <p className={'pb-3'}>I built this site using React.</p>
                    </div>
                </div>

                {/* CV Info Div */}
                <div className={'col-lg-8'}>
                    <div className={'mainDiv col-lg-12 p-4'}>

                        {/* About me */}
                        <h3 className={''}><i className="fa-solid fa-person-dress"></i> About Me</h3>
                        <hr/>
                        <p className={'pt-3'}>
                            I love all things technical. I have a passion for coding and would like to use my
                            skills to build in the cryptocurrency space. I am detail-oriented and work well in
                            a team or solo. Even though I am still in the beginning stages of my career as a
                            developer, I am a fast learner and I am driven.
                        </p>

                        {/* Work Experience */}
                        <h3 className={'pt-5'}><i className="fa-solid fa-briefcase"></i> Work Experience</h3>
                        <hr/>
                        <WorkExperience workExp={workExp}/>

                        {/* Skills */}
                        <h3 className={'pt-5'}><i className="fa-solid fa-laptop-code"></i> Skills</h3>
                        <hr/>
                        <Skills skills={skills}/>

                        {/* Education */}
                        <h3 className={'pt-5'}><i className="fa-solid fa-graduation-cap"></i> Education</h3>
                        <hr/>

                        <h4 className={'pt-3'}>
                            Full Stack Web Developer Bootcamp
                        </h4>
                        <p>2022</p>
                        <p>
                            Hyperion Dev
                        </p>

                        <h4 className={'pt-3 font-weight-bold'}>
                            Diploma in Sound Engineering
                        </h4>
                        <p>2010 - 2011</p>
                        <p>
                            The Academy of Sound Engineering
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume