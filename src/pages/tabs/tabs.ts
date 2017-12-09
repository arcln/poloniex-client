import { Component } from '@angular/core';

import { MarketsPage } from '../markets/markets';
import { AccountPage } from '../account/account';
import { AlertsPage } from '../alerts/alerts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MarketsPage;
  tab2Root = AccountPage;
  tab3Root = AlertsPage;

  constructor() {

  }
}
