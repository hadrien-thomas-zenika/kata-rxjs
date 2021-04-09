import { Injectable } from '@angular/core';
import { RightsRepository } from './rights.repository';
import { Observable } from 'rxjs';
import { Right } from './right';

@Injectable({
  providedIn: 'root'
})
export class RightsService {

  constructor(private rightsRepository: RightsRepository) {
  }

  getRights(): Observable<Right[]> {
    return this.rightsRepository.getRights();
  }
}
