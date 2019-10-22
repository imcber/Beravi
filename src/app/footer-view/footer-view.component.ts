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
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTwitter,faInstagram,faFacebookF,faHome,faEnvelope,faPhone,faDribbble,faGithub);
  }
}
