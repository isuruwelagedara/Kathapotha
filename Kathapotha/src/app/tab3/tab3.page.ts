import { Component ,OnInit, ViewChild } from '@angular/core';

import { IonRange } from '@ionic/angular';
import { Howl, Howler } from 'howler';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  playlist: Track[] = [

    {
      name: 'Andare - අන්දරේ',
      path: "https://firebasestorage.googleapis.com/v0/b/lankahub-24c28.appspot.com/o/Video%2Faudio1.mp3?alt=media&token=8a861b26-adc0-4d39-babf-f5114e512656",
    },
    // {
    //   name: 'Gajaman Nona - ගජමන් නෝනා',
    //   path: "assets/audio/audio2.mp3",
    // },

  ];

  activeTrack: Track = null;
  player: Howl = null;
  isplaying = false;
  progress = 0;
  @ViewChild('range', { static: false }) range: IonRange;

  constructor() {}


  start(track: Track) {

    if (this.player) {
      this.player.stop();
    }

    this.player = new Howl({
      src: [track.path],
      html5: true,

      onplay: () => {

        this.isplaying = true;
        this.activeTrack = track;
        this.updateprgress();
      },

      onend: () => {

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


  stopplayer(){
    this.player.stop();
  }

}
