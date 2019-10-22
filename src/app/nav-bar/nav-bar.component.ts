import { Component, ElementRef, ViewChild, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{
  _animation = "fadeIn";
  constructor(private renderer: Renderer2) { }
  @ViewChild("navbartop",{static:false}) navBar: ElementRef;

  @HostListener("window:scroll", ['$event'])
  scrollEventImg($event){
    if($event.srcElement.children[0].scrollTop < 330){
      //this.navBar["_elementRef"].nativeElement.style.transform = "translateX(-"+ $event.srcElement.children[0].scrollTop +"px) translateY(0px)";
    }

    if($event.srcElement.children[0].scrollTop > 550){
      this.renderer.addClass(this.navBar["_elementRef"].nativeElement, "solid-nav");
      this.renderer.removeClass(this.navBar["_elementRef"].nativeElement, "hide");
      //this._animation = "fadeIn";
      //return false;
    }else{
      this.renderer.removeClass(this.navBar["_elementRef"].nativeElement, "solid-nav");
      this.renderer.addClass(this.navBar["_elementRef"].nativeElement, "hide");
     // this._animation = "fadeOut";
    }
  }
}
