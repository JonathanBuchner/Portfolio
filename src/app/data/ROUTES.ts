import { Routes } from "@angular/router";
import { ProjectsComponent } from "../projects/projects.component";
import { BackgroundComponent } from "../background/background.component";
import { ContactComponent } from "../contact/contact.component";
import { PagenotfoundComponent } from "../pagenotfound/pagenotfound.component";

export const ROUTES: Routes = [
    {path: 'Projects', component:ProjectsComponent },
    {path: 'Background', component:BackgroundComponent },
    {path: 'Contact', component:ContactComponent },
    {path: '**', component:PagenotfoundComponent },
];