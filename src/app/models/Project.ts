import { TimeStamps } from "./TimeStamps";

export class Project {
    title: string;
    src: string;
    videosrc: string;
    elementId: string;
    highlights: string;
    description: string;
    timestamps: TimeStamps[];

    constructor(title: string, src: string, videosrc: string, elementId:string, highlights: string, description: string, timestamps?: TimeStamps[]) {
        this.title = title;
        this.src = src;
        this.videosrc = videosrc;
        this.elementId = elementId;
        this.highlights = highlights;
        this.description = description;
        this.timestamps = timestamps;
    }
}