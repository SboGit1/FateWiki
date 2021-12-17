import { Component, OnInit } from '@angular/core';

const fate=
[{
  "Name": "Mash",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2019-01/001_Mash_4Star.png?itok=V6S2QSKz",
  "id": 1,
  "Class": "Shielder",
  "button": "danger"
}, {
  "Name": "Artoria",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2017-07/artoria.png?itok=ojIGxs55",
  "id": 2,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Artoria Alter",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2017-07/VSowRz8.png?itok=N3tEcEre",
  "id": 3,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Artoria Lily",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2017-07/004%20Altria%20Pendragon%20%28Lily%29%20icon.png?itok=aWCZcwx5",
  "id": 4,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Nero Claudius",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2017-07/005%20Nero%20Claudius%20icon.png?itok=ymXg884l",
  "id": 5,
  "Class": "Saber",
  "button": "primary"
}, {
  "Name": "Siegfried",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2017-07/006%20Siegfried%20icon.png?itok=-XzJfxvX",
  "id": 6,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Julis Caesar",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2017-07/007%20Gaius%20Julius%20Caesar%20icon.png?itok=YXJP3t29",
  "id": 7,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Altera",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2017-07/008%20Altera%20icon.png?itok=61NAxrbV",
  "id": 8,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Giles De Rais",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2017-07/009%20Gilles%20de%20Rais%20%28Saber%29%20icon.png?itok=rwSOXQ5J",
  "id": 9,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Chevalier D'Eon",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/styles/width50px/public/2019-12/010%20Chevalier%20dEon%20icon.png?itok=WThQXfUQ",
  "id": 10,
  "Class": "Saber",
  "button": "danger"
}]


@Component({
  selector: 'app-fatearchive',
  templateUrl: './fatearchive.component.html',
  styleUrls: ['./fatearchive.component.css']
})
export class FatearchiveComponent implements OnInit {
  public fate_team: any[] = [];
  constructor() { }

  ngOnInit() {
    this.fate_team = fate;
  }

}
