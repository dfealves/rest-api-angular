import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { trigger } from '@angular/animations';

import { fadeIn } from '../shared/utils/fadeIn';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [trigger('fadeIn', fadeIn())],
})
export class HomeComponent implements OnInit {
  products = [];
  dataLoaded: boolean = false;
  @Input() skeletonLoad;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
  }

  hideSkeletonLoad(hideElement: boolean) {
    if (hideElement) {
      this.dataLoaded = true;
      this.skeletonLoad = false;
    } else {
      this.dataLoaded = false;
      this.skeletonLoad = true;
    }
  }
}
