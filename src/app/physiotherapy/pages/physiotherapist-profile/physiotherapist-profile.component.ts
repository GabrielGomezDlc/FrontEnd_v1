import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../model/physiotherapist";
import {ActivatedRoute} from "@angular/router";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";

@Component({
  selector: 'app-physiotherapist-profile',
  templateUrl: './physiotherapist-profile.component.html',
  styleUrls: ['./physiotherapist-profile.component.css']
})
export class PhysiotherapistProfileComponent implements OnInit {
  physiotherapist$: Observable<Physiotherapist> | undefined;
  constructor(private route: ActivatedRoute, private physiotherapistsService: PhysiotherapistsService) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.physiotherapist$ = this.physiotherapistsService.getPhysiotherapistById(id);
    });
  }

}
