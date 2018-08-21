import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService){
      
  }

  ngOnInit(): void {
    
  }  
  
  onCreateAccount(name, status){
    console.log(name, status)
    this.accountsService.addAccount(name, status);
  }
  
}
