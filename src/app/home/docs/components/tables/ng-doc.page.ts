import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { CheckboxSelectionComponent } from './checkbox-selection/checkbox-selection.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { DefaultTableComponent } from './default-table/default-table.component';
import { HoverStateComponent } from './highlight/hover-state/hover-state.component';
import { OverflowScrollingComponent } from './overflow-scrolling/overflow-scrolling.component';
import { StripedColumnsColorComponent } from './table-colors/striped-columns-color/striped-columns-color.component';
import { StripedColumnsComponent } from './highlight/striped-columns/striped-columns.component';
import { StripedRowsColorComponent } from './table-colors/striped-rows-color/striped-rows-color.component';
import { StripedRowsComponent } from './highlight/striped-rows/striped-rows.component';
import { TableCaptionComponent } from './table-layout/table-caption/table-caption.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TableFootComponent } from './table-layout/table-foot/table-foot.component';
import { TableHeadSortableComponent } from './table-layout/table-head-sortable/table-head-sortable.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { TableWithModalComponent } from './table-with-modal/table-with-modal.component';
import { TableWithProductsComponent } from './table-with-products/table-with-products.component';
import { TableWithShadowComponent } from './table-styles/table-with-shadow/table-with-shadow.component';
import { TableWithUsersComponent } from './table-with-users/table-with-users.component';
import { WithoutBorderComponent } from './table-styles/without-border/without-border.component';
import { HoverStateColorComponent } from './table-colors/hover-state-color/hover-state-color.component';

const TablesPage: NgDocPage = {
  title: `Tables`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.tables.order,
  demos: {
    DefaultTableComponent,
    StripedRowsComponent,
    StripedColumnsComponent,
    HoverStateComponent,
    TableHeadSortableComponent,
    TableFootComponent,
    TableCaptionComponent,
    WithoutBorderComponent,
    TableWithShadowComponent,
    OverflowScrollingComponent,
    TableSearchComponent,
    TableFilterComponent,
    TablePaginationComponent,
    CheckboxSelectionComponent,
    TableWithUsersComponent,
    TableWithProductsComponent,
    TableWithModalComponent,
    ComparisonTableComponent,
    StripedRowsColorComponent,
    StripedColumnsColorComponent,
    HoverStateColorComponent,
  },
};

export default TablesPage;
