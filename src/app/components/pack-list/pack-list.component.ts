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
  newPack: Pack = { id: 0, name: '', location: '', wolves: [] };
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

  onPackSelected(): void {
    if (this.selectedPackId) {
      this.packService.getPack(this.selectedPackId).subscribe((pack) => {
        this.selectedPack = pack;
      });
    } else {
      this.selectedPack = null;
    }
  }

  getWolvesForPack(packId: number): void {
    this.packService.getPack(packId).subscribe((pack) => {
      this.selectedPack = pack;
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
    this.packService.addWolfToPack(packId, wolfId).subscribe(() => {
      const pack = this.packs.find((p) => p.id === packId);
      if (pack) {
        const wolf = this.wolves.find((w) => w.id === wolfId);
        if (wolf) {
          pack.wolves.push(wolf);
        }
      }
    });
  }

  removeWolfFromPack(packId: number, wolfId: number): void {
    this.packService.removeWolfFromPack(packId, wolfId).subscribe(() => {
      const pack = this.packs.find((p) => p.id === packId);
      if (pack) {
        pack.wolves = pack.wolves.filter((wolf) => wolf.id !== wolfId);
      }
    });
  }
}