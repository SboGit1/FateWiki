import { Component, OnInit } from '@angular/core';

const fate=
[{
  "Name": "Mash",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2020-03/Mash%20Kyrielight_Orthenaus.png",
  "id": 1,
  "Class": "Shielder",
  "button": "danger"
}, {
  "Name": "Artoria",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/Artoria4.png",
  "id": 2,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Artoria Alter",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/Alter4.png",
  "id": 3,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Artoria Lily",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/004%20Altria%20Pendragon%20%28Lily%29%204.png",
  "id": 4,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Nero Claudius",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/005%20Nero%20Claudius%204.png",
  "id": 5,
  "Class": "Saber",
  "button": "primary"
}, {
  "Name": "Siegfried",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/006%20Siegfried%201.png",
  "id": 6,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Julis Caesar",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/007%20Gaius%20Julius%20Caesar%201.png",
  "id": 7,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Altera",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/008%20Altera%204.png",
  "id": 8,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Giles De Rais",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/009%20Gilles%20de%20Rais%20%28Saber%29%204.png",
  "id": 9,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "Chevalier D'Eon",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/010%20Chevalier%20d%27Eon%204.png",
  "id": 10,
  "Class": "Saber",
  "button": "danger"
}, {
  "Name": "EMIYA",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/011%20EMIYA%201.png",
  "id": 11,
  "Class": "Archer",
  "button": "danger"
}, {
  "Name": "Gilgamesh",
  "image": "https://gamepress.gg/grandorder/sites/grandorder/files/2017-07/012%20Gilgamesh%201.png",
  "id": 11,
  "Class": "Archer",
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
