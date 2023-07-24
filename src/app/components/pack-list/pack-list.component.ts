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
  newPack: Pack = { id: 0, name: '', lat: '', lng: '', wolves: [] };
  selectedPackId: number = 0;
  selectedPack: Pack | null = null;
  selectedWolfId: number = 0;

  constructor(private packService: PackService, private wolfService: WolfService) { }

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

  getWolvesForPack(packId: number): void {
    this.packService.getPack(packId).subscribe((pack) => {
      this.selectedPack = pack;
    });
  }

  addPack(): void {
    this.packService.addPack(this.newPack).subscribe((pack) => {
      this.packs.push(pack);
      this.newPack = { id: 0, name: '', lat: '', lng: '', wolves: [] };
    });
  }

  removePack(id: number): void {
    this.packService.removePack(id).subscribe(() => {
      this.packs = this.packs.filter((pack) => pack.id !== id);
      if (this.selectedPackId === id) {
        if (this.packs.length > 0) {
          this.selectedPackId = this.packs[0].id;
        } else {
          this.selectedPackId = 0;
        }
      }
    });
  }

  addWolfToPack(packId: number, wolfId: number): void {
    this.packService.addWolfToPack(packId, wolfId).subscribe((data) => {
      const newWolf = this.wolves.find((wolf) => wolf.id == wolfId);
      console.log(newWolf);
      if (newWolf) {
        this.selectedPack?.wolves.push(newWolf);
        this.wolves = this.wolves.filter((wolf) => wolf.id !== wolfId);
      }
    });
  }

  removeWolfFromPack(packId: number, wolfId: number): void {
    this.packService.removeWolfFromPack(packId, wolfId).subscribe((data) => {
      if (this.selectedPack) {
        this.selectedPack.wolves = this.selectedPack.wolves.filter((wolf) => wolf.id !== wolfId);
        const removedWolf = this.selectedPack.wolves.find((wolf) => wolf.id === wolfId);
        if (removedWolf) {
          this.wolves.push(removedWolf);
        }
      }
    });
  }
}