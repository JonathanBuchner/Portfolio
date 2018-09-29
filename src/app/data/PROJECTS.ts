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
      'HTML5 Media Element | Blob Storage ',
      `Envision changed thier screen capture from a proprietary video format to MP4, allowing for new 
      video processing and MP4 delivery through the browser.
      This video is a staged demo of an agent interaction featuring the newly implemented capture-to-play pipeline.
      I created the new 'HTML5 Player' demonstrated in the video.
      Challanges included cross-browser support for I.E. and an interactive waveform that supports over 20,000 points.`,
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
      `The sales team requested a demo phone for introducing new customers to the product. 
      This video is a staged demonstration of a call to my cell phone.  What you can't see is the desktop 
      screen capture starting, pausing, and the adding call capture tags.  The end result is an uplaoded recording with audio, screen, and call data.
      The project included setting up a TwiML App to place the call, error and call reporting, and an interface for adding the phone to organizations and agents.`,
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
      'Browser API | Async Restful Api | Page Redrawing',
      `A feature of the product is a supervisor sending back a review to an agent as an audio annotations appended to original media.  
      This video demonstrates the client side work of
      processing the audio in real time with the AudioContext API, collecting then graphing a set of points on a canvas, and sending the audio to
      the server as a blob.  The majority of the work, which I assisted in, wat the creation of a media service api in the cloud that appends
      the annotation to other media.  The biggest front-end challange was triggering the browser to redraw only part of the page.`,
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