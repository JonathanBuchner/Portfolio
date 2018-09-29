import { BackgroundInformation } from "../models/BackgroundInformation";

const imgPath = '../../assets/img/';

export const BACKGROUNDINFORMATION = [
    new BackgroundInformation(
        imgPath+'envision.webp',
        `Developer in Test at Envision`,
        `
        Envision captures then combines an agent's phone conversation with her deskptop screen.  
        The company collects call data, provides transcription services, does keywords spotting and offers a variety of data anaylitc and coaching tools.   
        I worked at Envision from Jan 2017 through September 2018.  The Engineering team included eight people, which was reduced to three people in September 2018.
        `
    ),
    new BackgroundInformation(
        imgPath+'epicodus.png',
        `Attended Epicodus in 2016`,
        `Epicodus is a six-month full-time programming school.  I took courses in .Net Core (Entity Framework, Identity), Ember, Angular, C#, SQL, Javascript, CSS, and HTML. 
        Programming, however, was a hobby before a career as I built a website for the non-profit Embracing Orphans and started an outdoor online community called Make The Summit.
        Through programming I found my ideal, fulfilling work environment: each day I have a fresh set of puzzles and learning opportunities. 
        I love it.`
    ),
    new BackgroundInformation(
        imgPath+'whitman-college_logo2.jpg',
        `Graduated from Whitman College (B.A. in Religion, 2007)`,
        `The study of religion at a secular college is religious literacy, which entails both a cognitive component (knowledge of religions and of the religious dimension of culture) 
        and proficiencies (the acquiring of skills relevant to the analysis of religion).  I still work on my thesis project on the Synoptic Gospels on occasion.`
    ),
    new BackgroundInformation(
        imgPath+'logo__type.png',
        `Beyond programming`,
        ` I enjoy spending time outdoors.  I previously taught outdoor climbing and I currently raft guide for WildWater. I enjoy games too, especially chess.`
    )
]