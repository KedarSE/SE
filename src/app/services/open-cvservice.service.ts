import { Injectable } from '@angular/core';

declare var cv: any;

@Injectable({
  providedIn: 'root'
})
export class OpenCVServiceService {

  constructor() { }

  detectButtons(imageData: ImageData): any{
    const MIN_BUTTON_AREA = imageData.height + imageData.width;
    const src = cv.matFromArray(imageData.height, imageData.width, cv.CV_8UC4, imageData.data);

    const gray = new cv.Mat();
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

    const binary = new cv.Mat();
    cv.threshold(gray, binary, 0, 255, cv.THRESH_BINARY | cv.THRESH_OTSU);

    const contours = new cv.MatVector();
    const hierarchy = new cv.Mat();
    cv.findContours(binary, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    const buttons: any[] = [];
    for(let i=0; i<contours.size(); i++){
      const contour = contours.get(i);
      const area = cv.contourArea(contour);
      if(area > MIN_BUTTON_AREA){
        const rect = cv.boundingRect(contour);
        buttons.push({x: rect.x, y:rect.y, width: rect.width, height: rect.height});
      }
      contour.delete();
    }

    src.delete();
    gray.delete();
    binary.delete()
  }

  grayScale(imageData: ImageData): any{
    const src = cv.matFromImageData(imageData);
    const dst = new cv.Mat();
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow('canvasOuput', dst);
    src.delete();
    dst.delete();
    return imageData;
  }
}
