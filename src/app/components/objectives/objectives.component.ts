
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from './../../services/data-service.service';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss'],
})
export class ObjectivesComponent {
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 5
      }
    },
    nav: true
  }
}
