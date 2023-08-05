import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  Properties: Array<any> = [
    {
      Id: 1,
      Name: 'Ashif House',
      Type: 'House',
      Price: 666678,
    },
    {
      Id: 2,
      Name: `Hasibul's House`,
      Type: 'House',
      Price: 89890,
    },
    {
      Id: 3,
      Name: 'Great House',
      Type: 'House',
      Price: 3425345,
    },
    {
      Id: 4,
      Name: 'Hasan House',
      Type: 'Duplex',
      Price: 3456700,
    },
    {
      Id: 5,
      Name: ' House',
      Type: 'Large',
      Price: 56000,
    },
  ];
}
