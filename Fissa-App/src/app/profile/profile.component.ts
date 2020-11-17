import { ProfileService } from "./profile.service";

import { Component, OnInit } from "@angular/core";
import { takePicture, requestPermissions } from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset";

@Component({
  selector: "Profile",
  moduleId: module.id,
  templateUrl: "./profile.component.html"
})

export class ProfileComponent implements OnInit {
    /*saveToGallery: boolean = true;
    cameraImage: ImageAsset;*/
    users: any = [];
    constructor(private profileservice: ProfileService) {}

    ngOnInit() {
        this.profileservice.getUsers().subscribe((data: any) => {
            this.users = data;

            console.log("Users", this.users);
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
