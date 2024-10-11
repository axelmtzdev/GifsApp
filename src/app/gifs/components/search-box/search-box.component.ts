import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar: </h5>
  <input type="text" class="form-control" placeholder="Buscar gifs..." (keyup.enter)="searchTag()" #txtTagInput>
  `
})

export class SearchBoxComponent {
  constructor(private gifService:GifsService) { }

  @ViewChild('txtTagInput')
  tagInput!:ElementRef<HTMLInputElement>;
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
