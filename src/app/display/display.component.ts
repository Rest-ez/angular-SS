import { Component, OnInit } from '@angular/core';
import { StarterService } from '../services/starter.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service: StarterService) { }

  testAPI: any;
  testGitHubRepoJSON: any;

  ngOnInit() {
    setTimeout(() => {
      this.callServices();
    }, 2000);
  }

  callServices() {
    this.service.getAPI().subscribe( result => {
      this.testAPI = result;
    }, err => {
      this.testAPI = err;
    });

    this.service.getGitHubRepoJSON().subscribe( result => {
      this.testGitHubRepoJSON = result;
    }, err => {
      this.testGitHubRepoJSON = err;
    });
  }

}
