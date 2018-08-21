import { Component } from '@angular/core';
import { AccountsService } from './services/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent {
   
  constructor(private accountsService: AccountsService){

  }

  accounts = [];

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
     this.accountsService.addAccount(newAccount.name, newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountsService.updateAccount(updateInfo.id, updateInfo.newStatus);
  }
}
