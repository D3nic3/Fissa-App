import { ProfileService } from "./profile.service";
import { User } from "./profile";

import { Component, OnInit } from "@angular/core";
import { takePicture, requestPermissions } from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { DataItem } from "../festival/festival.service";

@Component({
  selector: "Profile",
  moduleId: module.id,
  styleUrls: [
    "./profile.component.css"
  ],
  templateUrl: "./profile.component.html"
})

export class ProfileComponent implements OnInit {
    /*saveToGallery: boolean = true;
    cameraImage: ImageAsset;*/
    user: User;
    constructor(private profileservice: ProfileService) {
    }

    ngOnInit() {
        this.profileservice.findAll().subscribe((data) => {
            this.user = data;
            console.log(data);
        }, (error) => {
            console.log(error.error);
        });
    }

    tappedAlcohol() {
        console.log("Alcohol");
    }

    tappedPills() {
        console.log("Pills");
    }

    tappedWeed() {
      console.log("Weed");
    }

    /*onTakePictureTap(args) {
    requestPermissions().then(
      () => this.capture(),
      () => alert("permissions rejected")
    );
  }

    capture() {
    takePicture({ width: 250, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery })
      .then((imageAsset: any) => {
        this.cameraImage = imageAsset;
        imageAsset.getImageAsync(function(nativeImage) {
          let scale = 1;
          let height = 0;
          let width = 0;
          if (imageAsset.android) {
            // get the current density of the screen (dpi) and divide it by the default one to get the scale
            scale = nativeImage.getDensity() / imageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
            height = imageAsset.options.height;
            width = imageAsset.options.width;
          } else {
            scale = nativeImage.scale;
            width = nativeImage.size.width * scale;
            height = nativeImage.size.height * scale;
          }
          console.log(`Displayed Size: ${width}x${height} with scale ${scale}`);
          console.log(`Image Size: ${width / scale}x${height / scale}`);
            });
          }, (error) => {
            console.log("Error: " + error);
      });
  }*/
}
