import { Component, OnInit } from '@angular/core';

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Greatest Pictures of All Time";
  image1 =
    "https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png";
  image2 =
    "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_696,h_870/k%2FPhoto%2FRecipes%2F2019-06-how-to-make-the-best-chicken-flautas%2FHow-to-Make-Best-Chicken-Flautas_094";
  image3 =
    "https://i.guim.co.uk/img/media/a5ae7ab344dcd0bec0b8ca9c12359f732adfeeb8/0_20_600_360/master/600.jpg?width=620&quality=85&auto=format&fit=max&s=0516ee67da606da0861e59b8fe1cec7c";

  constructor() {}

  ngOnInit() {}
}
