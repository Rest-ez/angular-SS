import { Component, OnInit } from '@angular/core';
import { EmitterService, Toast } from './services/emitter.service';

import { ConfigService } from './config.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basecamp / booz allen';


  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getConfig().subscribe((data: any) => {
      Object.keys(data).forEach(key => {
        environment[key] = data[key];
        console.log(data[key]);
      });
      Toast.info('services are connected', 'services config');
    });

    EmitterService.get('SHOWERROR').subscribe(item => {
      // console.log('SHOWERROR ' + JSON.stringify(item, undefined, 3));
      this.openToast('error', item.title, item.message);
    });

    EmitterService.get('SHOWWARNING').subscribe(item => {
      // console.log('SHOWWARNING ' + JSON.stringify(item, undefined, 3));
      this.openToast('warning', item.title, item.message);
    });

    EmitterService.get('SHOWINFO').subscribe(item => {
      // console.log('SHOWINFO ' + JSON.stringify(item, undefined, 3));
      this.openToast('info', item.title, item.message);
    });

    EmitterService.get('SHOWSUCCESS').subscribe(item => {
      // console.log('SHOWSUCCESS ' + JSON.stringify(item, undefined, 3));
      this.openToast('success', item.title, item.message);
    });
  }

  openToast(type, title, message) {
    console.log(this, title, message);
  }

  // this.messageService.add({severity:'success', summary: title, detail:message});
  // this.href = this.router.url;
  // this.toastrService[type](title, message, this.options);

  clearToasts() {
    // this.toastrService.clearAllToasts();
  }
}
