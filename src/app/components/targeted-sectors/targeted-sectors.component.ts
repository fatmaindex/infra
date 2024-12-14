import { Component } from '@angular/core';
import { DataService } from './../../services/data-service.service';

@Component({
  selector: 'app-targeted-sectors',
  templateUrl: './targeted-sectors.component.html',
  styleUrl: './targeted-sectors.component.scss'
})
export class TargetedSectorsComponent {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }

  
  }

