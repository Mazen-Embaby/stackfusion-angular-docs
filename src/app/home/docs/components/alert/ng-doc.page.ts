import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { DefaultAlertComponent } from './default-alert/default-alert.component';
import { AlertsWithIconComponent } from './alerts-with-icon/alerts-with-icon.component';
import { BorderdAlertsComponent } from './borderd-alerts/borderd-alerts.component';
import { AlertsWithListComponent } from './alerts-with-list/alerts-with-list.component';
import { DismissingComponent } from './dismissing/dismissing.component';
import { BorderAccentComponent } from './border-accent/border-accent.component';
import { AdditionalContentComponent } from './additional-content/additional-content.component';
import { DocCompTitleOrder } from '../comp-order';

const AlertPage: NgDocPage = {
  title: `Alert`,
  mdFile: './index.md',
  category: ComponentsCategory,
  demos: {
    DefaultAlertComponent,
    AlertsWithIconComponent,
    BorderdAlertsComponent,
    AlertsWithListComponent,
    DismissingComponent,
    BorderAccentComponent,
    AdditionalContentComponent,
  },
  order: DocCompTitleOrder.alerts.order,
};

export default AlertPage;
