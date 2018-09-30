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
      'HTML5 Media | Blob Storage ',
      `Envision changed their screen capture from a proprietary video format to MP4 allowing for new video processing and MP4 delivery through the browser. 
      This video is a staged demo of an agent interaction featuring the newly implemented capture-to-play pipeline. 
      I created the new 'HTML5 Player' demonstrated in the video. 
      The biggest challenged was an interactive waveform that supports over 20,000 points.`,
      [
        new TimeStamps(21, 'HTML5 Player windows opened'),
        new TimeStamps(31, 'Adding a mark'),
        new TimeStamps(88, 'Transcription feature'),
      ]
    ),
    new Project(
      'Browser Phone', 
      imgFolder+'browserphone.png',
      vidFolder+'browserphone.mp4',
      'browser-phone-project',
      'WebRTC | Twilio Integration | International Calling',
      `Envision’s sales team requested a ‘demo phone’ for introducing new customers to the Click2Coach product. 
      This video demonstrates calling my cell phone from the browser.  Behind the scenes desktop 
      screen capture is started, paused, and ended as call data is captured. 
      The project included setting up a TwiML App to place the call, error and call reporting, and interfaces for managing the phone's use.
      `,
      [
        new TimeStamps(8, 'Call placed'),
        new TimeStamps(15, 'Adding data tags'),
        new TimeStamps(26, 'Call picked up'),
        new TimeStamps(34, 'Call ended'),
      ]
    ),
    new Project(
      'Annotation Player', 
      imgFolder+'annotation.png',
      vidFolder+'annotation.mp4',
      'annotation-project',
      'Browser APIs | Async Restful Api | Page Redrawing',
      `On the click2coach website, supervisor may add an audio annotation appended to original media as part of an agent’s review. 
      This video demonstrates processing the audio in real time with the AudioContext API, collecting and graphing a set of points on a canvas, and sending the audio to the server as a blob.  
      I also assisted in the creation of a media service api i that appends the annotation to the original media.   
      The biggest front-end challenge was triggering the browser to redraw only part of the page. 
      `,
      [
        new TimeStamps(13, 'Recording started'),
        new TimeStamps(15, 'Live audio processing'),
        new TimeStamps(22, 'Waveform generated'),
        new TimeStamps(34, 'Recording sent for back-end processing.')
      ]
    ),
  ];

  
export const PERSONALPROJECTS = [
];