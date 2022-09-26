import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {Treatment} from "../../model/treatment";
import {ActivatedRoute} from "@angular/router";
import {TreatmentsService} from "../../services/treatments.service";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  treatment$: Observable<Treatment> | undefined;

  s_number=1;
  s_url:string="";
  s_value:boolean;

  constructor(private route: ActivatedRoute, private treatmentsService: TreatmentsService ) {
    this.s_value=false;
  }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.treatment$ = this.treatmentsService.getById(id);
    });
  }

  nextSession(){
    this.s_number+=1;
    this.s_value=true;
  }

  prevSession(){
    if(this.s_number>1){
      this.s_number-=1;
    }

    if(this.s_number=1){
      this.s_value=false;
    }

  }

  setUrl(url: string){
    this.s_url=url;
  }
}
