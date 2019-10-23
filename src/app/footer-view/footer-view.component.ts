import { Component} from '@angular/core';
import { faTwitter,faInstagram,faFacebookF,faDribbble,faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faHome,faEnvelope,faPhone  } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer-view',
  templateUrl: './footer-view.component.html',
  styleUrls: ['./footer-view.component.scss']
})
export class FooterViewComponent{
  _devSocialList:ListDevSocial = [
    {pre:"fab",icon:"twitter",href:""},
    {pre:"fab",icon:"instagram",href:""},
    {pre:"fab",icon:"dribbble",href:"https://dribbble.com/shots/7706777-Beravi"},
    {pre:"fab",icon:"github",href:"https://github.com/imcber"}
  ];

  constructor(private library: FaIconLibrary) {
    library.addIcons(faTwitter,faInstagram,faFacebookF,faHome,faEnvelope,faPhone,faDribbble,faGithub);
  }
}

interface socialDev {
  pre: string;
  icon: string;
  href: string;
}

interface ListDevSocial extends Array<socialDev>{}