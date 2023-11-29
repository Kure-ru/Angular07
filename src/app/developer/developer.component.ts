import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  developer: Developer = {
    firstName: 'Claire',
    lastName: 'D.',
    age: 20,
    gender: 'F',
    bio: 'I am a developer',
    skills: [
      {
        name: 'HTML',
        logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        site: 'https://www.w3.org/html/',
      },
      {
        name: 'CSS',
        logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        site: 'https://www.w3.org/Style/CSS/',
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        site: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Angular',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        site: 'https://angular.io/',
      },
    ],
  };
}
