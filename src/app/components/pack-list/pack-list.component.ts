import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/services/pack.service';
import { WolfService } from 'src/app/services/wolf.service';
import { Pack } from 'src/models/pack.model';
import { Wolf } from 'src/models/wolf.model';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.scss']
})
export class PackListComponent implements OnInit {
  packs: Pack[] = [];
  wolves: Wolf[] = [];
  selectedWolfId: number = 0;
  newPack: Pack = { id: 0, name: '', location: '', wolves: [] };
  selectedPack: Pack = this.newPack;

  constructor(private packService: PackService, private wolfService: WolfService) {}

  ngOnInit(): void {
    this.getPacks();
    this.getWolves();
  }

  getPacks(): void {
    this.packService.getPacks().subscribe((packs) => {
      this.packs = packs;
    });
  }

  getWolves(): void {
    this.wolfService.getWolves().subscribe((wolves) => {
      this.wolves = wolves;
    });
  }

  addPack(): void {
    this.packService.addPack(this.newPack).subscribe((pack) => {
      this.packs.push(pack);
      this.newPack = { id: 0, name: '', location: '', wolves: [] };
    });
  }

  updatePack(pack: Pack): void {
    this.packService.updatePack(pack).subscribe();
  }

  removePack(id: number): void {
    this.packService.removePack(id).subscribe(() => {
      this.packs = this.packs.filter((pack) => pack.id !== id);
    });
  }

  addWolfToPack(packId: number, wolfId: number): void {
    this.packService.addWolfToPack(packId, wolfId).subscribe((pack) => {
      this.updateSelectedPack(pack);
    });
  }

  removeWolfFromPack(packId: number, wolfId: number): void {
    this.packService.removeWolfFromPack(packId, wolfId).subscribe((pack) => {
      this.updateSelectedPack(pack);
    });
  }

  selectPack(pack: Pack): void {
    this.selectedPack = pack;
  }

  updateSelectedPack(pack: Pack): void {
    if (this.selectedPack && pack.id === this.selectedPack.id) {
      this.selectedPack = pack;
    }
  }
}