import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artist } from '../artists.model';
import { SpotifyService } from '../core/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  artista: Artist;
   
  constructor(
    private service: SpotifyService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.artista = this.service.getArtits(id);

    });  
  }

}
