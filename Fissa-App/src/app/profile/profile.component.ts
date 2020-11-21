import { ProfileService } from "./profile.service";
import { User } from "./profile";

import { Component, OnInit } from "@angular/core";
import { takePicture, requestPermissions } from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset";

@Component({
  selector: "Profile",
  moduleId: module.id,
  styleUrls: [
    "./profile.component.css"
  ],
  templateUrl: "./profile.component.html"
})

export class ProfileComponent implements OnInit {
    saveToGallery: boolean = true;
    cameraImage: ImageAsset;
    user: User;
    stripeAlcoholOn = "opacity:0;";
    stripeWeedOn = "opacity:0;";
    stripeDrugsOn = "opacity:0;";

    constructor(private profileservice: ProfileService) {
    }

    ngOnInit() {
      this.userData();
    }

    userData() {
      this.profileservice.findAll().subscribe((data) => {
        this.user = data;

        if (!this.user.alcohol) {
          this.stripeAlcoholOn = "opacity:1;";
          }
        if (!this.user.wiet) {
          this.stripeWeedOn = "opacity:1;";
          }
        if (!this.user.drugs) {
          this.stripeDrugsOn = "opacity:1;";
          }
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

    onTakePictureTap(args) {
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
  }
}
