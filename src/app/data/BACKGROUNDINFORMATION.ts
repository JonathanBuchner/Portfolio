import { BackgroundInformation } from "../models/BackgroundInformation";

const imgPath = '../../assets/img/';

export const BACKGROUNDINFORMATION = [
    new BackgroundInformation(
        imgPath+'envision.png',
        `Developer in Test at Envision`,
        `
        Envision captures agent-customer interactions, which is usually the audio from a call center employee's phone combined with the video of her deskptop screen.  
        The company collects call data, provides transcription services, does keywords spotting and offers a variety of data analytic and coaching tools.   
        I worked for Envision from Jan 2017 through September 2018, primarily building new features for the Click2coach website.  The Engineering team included eight people, which was reduced to three people in September 2018.
        `
    ),
    new BackgroundInformation(
        imgPath+'epicodus.png',
        `Programming Background`,
        `
        I attended Epicodus, a six-month full-time programming school.  I took courses in .Net Core (Entity Framework, Identity), Ember, Angular, C#, SQL, Javascript, CSS, and HTML. 
        Programming, however, was a hobby before a career and I built a website for the non-profit Embracing Orphans and started an outdoor online community called Make The Summit.
        Through programming I found my ideal, fulfilling work environment: each day I have a fresh set of puzzles and learning opportunities. 
        I love it.
        `
    ),
    new BackgroundInformation(
        imgPath+'whitman.png',
        `B.A. in Religion from Whitman College (2007)`,
        `The study of religion at a secular college is religious literacy, which entails both a cognitive component (knowledge of religions and of the religious dimension of culture) 
        and proficiencies (the acquiring of skills relevant to the analysis of religion).`
    ),
    new BackgroundInformation(
        imgPath+'wildwater.png',
        `And on the weekends...`,
        ` I spend time outdoors.  I previously taught outdoor climbing and I currently raft guide for WildWater. I will backcountry ski this winter. I enjoy games, especially chess.`
    )
]