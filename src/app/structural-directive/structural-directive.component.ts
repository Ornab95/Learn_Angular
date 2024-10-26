import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  name1 = '';
  name2 = '';
  isVisible = true;
  div2 = true;
  hide() {
    this.isVisible = false;
  }
  show() {
    this.isVisible = true;
  }
  visible(){
    this.div2 = !this.div2;
  }

}
