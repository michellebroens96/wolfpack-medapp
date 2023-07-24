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
  gender: string[] = [];
  newWolf: Wolf = { id: 0, name: '', gender: '', birthday: new Date() };
  constructor(private wolfService: WolfService) {}

  ngOnInit(): void {
    this.getWolves();
    this.gender.push('male');
    this.gender.push('female');
  }

  getWolves(): void {
    this.wolfService.getWolves().subscribe((wolves) => (this.wolves = wolves));
  }

  addWolf(): void {
    const newWolfData: Wolf = {
      id: 0,
      name: this.newWolf.name,
      gender: this.newWolf.gender,
      birthday: this.newWolf.birthday
    };
    var datePipe = new DatePipe('en-GB');
    datePipe.transform(newWolfData.birthday, 'yyyy/MM/dd')

    console.log(newWolfData)
    this.wolfService.addWolf(newWolfData).subscribe((wolf) => {
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
