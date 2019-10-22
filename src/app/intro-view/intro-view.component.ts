import { Component, HostListener, ViewChild, ElementRef  } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-intro-view',
  templateUrl: './intro-view.component.html',
  styleUrls: ['./intro-view.component.scss']
})
export class IntroViewComponent {
  summaryMsg = "En BERAVI nos especializamos en garantizar el cumplimiento de sus obligaciones fiscales mediante un servicio personalizado.";
  listImgService:ListServices = [
    {imgName:'estadosFinancieros.png',text:'Elaboración de estados financieros',visible:false},
    {imgName:'clientes1.png',text:'Contabilidad de personas físicas y morales',visible:false},
    {imgName:'construtoras.png',text:'Contabilidad a \n constructoras',visible:false},
    {imgName:'coi.png',text:'Contabilidad mediante sistema COI',visible:false},
    {imgName:'imss.png',text:'Movimientos ante IMSS e INFONAVIT',visible:false}
  ];

  @ViewChild("imgIntro",{static:false}) itemImgIntro: ElementRef;
  @ViewChild("divListService",{static:false}) divListService: ElementRef;
  @ViewChild("imgLogoIntro",{static:false}) imgLogoIntro: ElementRef;
  
  @HostListener("window:scroll", ['$event'])
  scrollEventImg($event){
    const listPosition = this.divListService.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if(listPosition < scrollPosition - window.innerHeight){
      var timeAppear = 0;
      this.listImgService.forEach(item => {
        timeAppear += 700;
        setTimeout(() =>  item.visible = true, timeAppear);
      });
    }
    this.itemImgIntro.nativeElement.style.transform = "translateX(-"+ $event.srcElement.children[0].scrollTop +"px) translateY(0px)";
    this.imgLogoIntro.nativeElement.style.transform = "translateX("+ $event.srcElement.children[0].scrollTop +"px) translateY(0px)";
  }
}

interface imageService {
  imgName: string;
  text: string;
  visible: boolean;
}

interface ListServices extends Array<imageService>{}
