import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  show(){
    return true;
  }
  hide(){
    return false;
  }
  toggle(){
    return !this.show;
  }

}
