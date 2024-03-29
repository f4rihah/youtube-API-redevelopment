import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtubeservice.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';

  constructor(private youtubeService: YoutubeService, private router: Router) {}

  searchVideos() {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/searchResult'], { queryParams: { q: this.searchQuery } });
    }
  }
}

