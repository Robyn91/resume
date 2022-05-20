import './Resume.css';
import face from '../Images/face.jpg'
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

// Any section listing more than 2 items or needing future updating I used props

// Create array for WorkExperience props
const workExp = [
    {
        position: 'Full Stack Web Developer',
        timeline: '2022 - Present',
        where: 'Freelance'
    },
    {
        position: 'Cryptocurrency Investor & Trader',
        timeline: '2017 - Present',
        where: 'Part-time'
    },
    {
        position: 'Location Sound Mixer/Recordist',
        timeline: '2013 - 2022',
        where: 'Freelance'
    },
    {
        position: 'Office Assistant',
        timeline: '2012 - 2013',
        where: 'Red Flag Design & Marketing'
    },
    {
        position: 'Assistant Final Mix Engineer',
        timeline: '2012',
        where: 'The Wild'
    },
    {
        position: 'Final Mix Engineer',
        timeline: '2011 - 2012',
        where: '344 Studios'
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