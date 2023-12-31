import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WolfService } from 'src/app/services/wolf.service';
import { Wolf } from 'src/models/wolf.model';

@Component({
  selector: 'app-wolf-list',
  templateUrl: './wolf-list.component.html',
  styleUrls: ['./wolf-list.component.scss']
})

export class WolfListComponent implements OnInit {
  wolves: Wolf[] = [];
  newWolf: Wolf = { id: 0, name: '', gender: '', birthday: new Date() };
  constructor(private wolfService: WolfService) {}

  ngOnInit(): void {
    this.getWolves();
  }

  getWolves(): void {
    this.wolfService.getWolves().subscribe((wolves) => (this.wolves = wolves));
  }

  addWolf(): void {
    this.wolfService.addWolf(this.newWolf).subscribe((wolf) => {
      this.wolves.push(wolf);
      this.newWolf = { id: 0, name: '', gender: '', birthday: new Date() };
    });
  }

  updateWolf(wolf: Wolf): void {
    this.wolfService.updateWolf(wolf).subscribe();
  }

  removeWolf(id: number): void {
    this.wolfService.removeWolf(id).subscribe(() => {
      this.wolves = this.wolves.filter((wolf) => wolf.id !== id);
    });
  }
}
