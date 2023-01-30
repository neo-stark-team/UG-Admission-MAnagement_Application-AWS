import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private search:SearchService) { }

  ngOnInit(): void {
  }

  callfunc(x){
    this.search.setmes(x.target.value);
    
  }

}
