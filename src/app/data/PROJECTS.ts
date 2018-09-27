import { Project } from "../models/Project";
import { TimeStamps } from "../models/TimeStamps";

const imgFolder = '../../assets/img/';
const vidFolder = '../../assets/vid/';

export const PROFESSIONALPROJECTS = [
    new Project(
      'HTML5 Player', 
      imgFolder+'player.png',
      vidFolder+'player.mp4',
      'media-player-project',
      'HTML5 Media | CSS Transitions | Blob Storage',
      `Envision changed from a proprietary video format to Mp4 for screen capture, allowing 
      new video processing and mp4 delivery through browser APIs.
      The video is a staged demo of an agent interaction featuring the newly implemented capture-to-play pipeline.
      I created the new 'HTML5 Player' demonstrated in the video.
      Challanges included cross-browser support for I.E. and smooth browser redrawing of the waveform (which could have upwards of 16,000 points).`,
      [
        new TimeStamps(22, 'HTML5 Player windows opened'),
        new TimeStamps(29, 'Adding a mark'),
        new TimeStamps(88, 'Transcription feature'),
      ]
    ),
    new Project(
      'Browser Phone', 
      imgFolder+'browserphone.png',
      vidFolder+'browserphone.mp4',
      'browser-phone-project',
      'External API | WebRTC | Blob Storage',
      `The sales team requested a demo phone for introducing new customers to the product. 
      The video is a staged demonstration of a call to my cell phone.  What you can't see is the desktop screen capture starting, pausing, adding call capture tags, and ending.  
      The project included setting up a TwiML App to place the call, error and call reporting, and an interface for adding the phone to specific agents.`,
      [
        new TimeStamps(8, 'Call placed'),
        new TimeStamps(15, 'Adding data tag'),
        new TimeStamps(26, 'Call picked up'),
        new TimeStamps(34, 'Call ended'),
      ]
    ),
  ];

  
export const PERSONALPROJECTS = [
];