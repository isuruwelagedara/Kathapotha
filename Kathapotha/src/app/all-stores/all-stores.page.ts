import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



export interface store {
  id: string;
  name: string;
  caption: string;
  poster: string;
  CREATE_TS:any
}


@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.page.html',
  styleUrls: ['./all-stores.page.scss'],
})
export class AllStoresPage implements OnInit {

  Stores : store[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    var url = "assets/data/stores.json"

    this.http.get<store[]>(url)
    .subscribe(data => {
      this.Stores = data;
      console.log(data[3]);

      return this.Stores.sort((a, b) => {
        return <any>new Date(b.CREATE_TS) - <any>new Date(a.CREATE_TS);
      });
    });

  }


  radestory(store){
    this.router.navigate(['player/'+store.id]);
  }


}
