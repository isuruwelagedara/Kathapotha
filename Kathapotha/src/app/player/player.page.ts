import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRange } from '@ionic/angular';
import { Howl, Howler } from 'howler';

export interface store {
  id: string;
  name: string;
  caption: string;
  poster: string;
  path: any;
  CREATE_TS: any
}


@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {


  playtrack: store;

  activeTrack = null;
  player: Howl = null;
  isplaying = false;
  progress = 0;
  min = 0;
  sec = 0;
  songurl: any


  // ----- local var

  lname: any;
  lposter: any;
  lcaption: any;


  @ViewChild('range', { static: false }) range: IonRange;


  public postid;




  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    var url = "assets/data/stores.json"

    let postid = this.route.snapshot.params['id'];

    // get data from jsone 
    this.http.get<store[]>(url)
      .subscribe(data => {
        // var ptest = data[postid];
        this.playtrack = data[postid];
        // console.log(data[postid].name);

        this.songurl = this.playtrack.path;
        this.lname = this.playtrack.name;
        this.lposter = this.playtrack.poster;
        this.lcaption = this.playtrack.caption;

        console.log(this.songurl)
      });

    this.start();

  }

  start() {

    if (this.player) {
      this.player.stop();
    }

    this.player = new Howl({
      src: [this.songurl],
      html5: true,
      autoplay: true,
      loop: true,
      volume: 0.9,
      preload: true,
      format: ['dolby'],

      onplay: () => {

        this.isplaying = true;
        this.activeTrack = this.songurl;
        this.updateprgress();
     
      },

      onend: () => {
        this.player.stop();
        this.isplaying = false;
      }
    });
    this.player.play();
  }


  togglePlayer(pause) {

    this.isplaying = !pause;

    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }

  }

  next() {



  }

  prev() {


  }

  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));

  }


  updateprgress() {

    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0
    setTimeout(() => {
      this.updateprgress();

    }, 1000)

  }

  stopplayer() {
    this.player.stop();
  }



  taketime() {

    this.player.duration();
    console.log();

  }

}





