import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { GameService } from '../services/game.service';
import { EventService } from '../services/eventEmitter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  games: any;
  public isCollapsed: boolean = false;

  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private _messageService: EventService,
    private gameService: GameService,
  ) {
  }

  ngOnInit() {
    this.gameService.getActiveGames()
      .subscribe((data) => {
          this.games = data['games'];
      }, errObj => {
        this.toaster.error(errObj.error.err,'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      });
  }


}
