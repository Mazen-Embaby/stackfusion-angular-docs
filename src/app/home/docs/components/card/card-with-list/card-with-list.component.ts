import { Component } from '@angular/core';

interface customerData {
  name: string;
  avatarUrl: string;
  email: string;
  revenue: number;
}

@Component({
  selector: 'app-card-with-list',
  imports: [],
  templateUrl: './card-with-list.component.html',
  styles: ``,
})
export class CardWithListComponent {
  data: customerData[] = [
    {
      name: 'Mazen Embaby',
      email: 'mazen@daeeim.com',
      avatarUrl: './assets/img/avatar/photo-1472099645785-5658abf4ff4e.jpg',
      revenue: 320,
    },
    {
      name: 'Bonnie Green',
      email: 'bonnie@daeeim.com',
      avatarUrl: './assets/img/avatar/julian-wan-WNoLnJo7tS8-unsplash.jpg',
      revenue: 3467,
    },
    {
      name: 'Michael Gough',
      email: 'michael@daeeim.com',
      avatarUrl: './assets/img/avatar/jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
      revenue: 67,
    },
    {
      name: 'Michael Gough',
      email: 'michael@daeeim.com',
      avatarUrl: './assets/img/avatar/nicolas-horn-MTZTGvDsHFY-unsplash.jpg',
      revenue: 367,
    },
    {
      name: 'Thomes Lean',
      email: 'thomes@daeeim.com',
      avatarUrl: './assets/img/avatar/alex-suprun-ZHvM3XIOHoE-unsplash.jpg',
      revenue: 2597,
    },
  ];
}
