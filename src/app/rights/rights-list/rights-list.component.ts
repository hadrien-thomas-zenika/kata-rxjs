import { Component, OnInit } from '@angular/core';
import { RightsService } from '../rights.service';
import { Right } from '../right';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rights-list',
  templateUrl: './rights-list.component.html',
  styleUrls: ['./rights-list.component.scss']
})
export class RightsListComponent implements OnInit {

  rights$: Observable<Right[]>;

  constructor(private rightsService: RightsService) { }

  ngOnInit(): void {
    this.rights$ = this.rightsService.getRights();
  }

}
