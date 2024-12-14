import { Component } from '@angular/core';
import { DataService } from './../../services/data-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
data:any;
constructor( private dataService:DataService){}
ngOnInit(): void {
 
  this.data = this.dataService.getData();

}
}
