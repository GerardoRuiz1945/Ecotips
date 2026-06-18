import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tips',
  imports: [],
  templateUrl: './tips.html',
  styleUrl: './tips.css',
})
export class Tips {
  constructor(private router: Router) {}

  irATip(id: string) {
    this.router.navigate(['/tips', id]);
  }
}
