import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare function imageMapResize(): void;
@Component({
  selector: 'app-image-map',
  templateUrl: './image-map.page.html',
  styleUrls: ['./image-map.page.scss'],
})
export class ImageMapPage implements OnInit {

  @Input()
  src: string

  @Input()
  coordinates: ImageMapCoordinate[]

  @Input()
  canEdit: boolean

  @Output('onClick')
  onClick: EventEmitter<ImageMapCoordinate> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getCoordinateStyle(coordinate: ImageMapCoordinate): object {
    return {
      top: `${coordinate.y}px`,
      left: `${coordinate.x}px`,
      height: `${coordinate.height}px`,
      width: `${coordinate.width}px`
    };
  }

  onAreaClick(coordinate: ImageMapCoordinate | undefined) {
    this.onClick.emit(coordinate);
  }

  // onAreaContext(e: MouseEvent, coordinate: ImageMapCoordinate) {
  //   if(this.canEdit)
  //   {
  //     if(coordinate) {
  //       console.log('editing')

  //     }
  //     else {
  //       console.log('creating')
  //     }
    
  //     e.stopPropagation();
  //     return false;
  //   }
  // }

  onAreaCreate(x: number, y: number): ImageMapCoordinate {
    const coordinate = new ImageMapCoordinate({x, y, width: 100, height: 100});
    return coordinate
  }

  onAreaEdit(coordinate: ImageMapCoordinate): ImageMapCoordinate {
    return coordinate;
  }

  imageResized() {
    imageMapResize(); // Javascript function in imageMapResizer.min.js 
  }


}

export class ImageMapCoordinate {
  x: number = 0
  y: number = 0
  width: number = 100
  height: number = 100
  name?: string

  constructor(init?: Partial<ImageMapCoordinate>) {
    Object.assign(this, init);
  }
}