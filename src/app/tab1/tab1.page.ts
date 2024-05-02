import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { OpenCVServiceService } from '../services/open-cvservice.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ImageMapCoordinate } from '../image-map/image-map.page';

declare function imageMapResize(): void;
// import * as $ from 'jquery';
import * as jquery from 'jquery';
 


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  @ViewChild('rectArea') rectArea!: ElementRef;
  err = 0.0;
  imageSrc: string = '';
  shaps: any[] = [];
  retRatio = { width: 1, height: 1 };


  imagePath = '/assets/image.PNG'
  
  coordinates: ImageMapCoordinate[] = [
    {
      name: 'Clicked on main',
      x: 1,
      y: 1,
      width: 60,
      height: 30,
    },
    {
      name: 'Clicked on F1',
      x: 85,
      y: 1,
      width: 30,
      height: 30,
    },
    {
      name: 'Clicked on F2',
      x: 120,
      y: 1,
      width: 30,
      height: 30,
    },
  ];
  
  constructor(private openCVService: OpenCVServiceService, private http: HttpClient) {
    this.imageSrc='/assets/image.PNG'
    // this.loadImgConvertBase64();
  }
  
  ionViewDidEnter(){
    imageMapResize(); // Javascript function in imageMapResizer.min.js 

  }


  showSomeAlertMain(){
    alert("Main")
  }

  showSomeAlertF1(){
    alert("F1")
  }

  showSomeAlertF2(){
    alert("F2")
  }

  showSomeAlertF3(){
    alert("F3")
  }

  showSomeAlertF4(){
    alert("F4")
  }

  showSomeAlertC(){
    alert('btn2')
  }

  imageResized() {
    imageMapResize(); // Javascript function in imageMapResizer.min.js 
  }
}
