import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  NavBarInfo: NavBarInfo = {
    name: "<Samy />",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Kaito_Kid_signature.svg",
    isClicked: false
  }

  clickExpandButton() {
    this.NavBarInfo.isClicked = !this.NavBarInfo.isClicked;
  }

}

export interface NavBarInfo {
  name:String;
  image:String;
  isClicked:Boolean;
}
