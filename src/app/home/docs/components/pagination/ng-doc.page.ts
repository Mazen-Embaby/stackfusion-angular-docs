import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultPaginationComponent } from './default-pagination/default-pagination.component';
import { PaginationWithIconsComponent } from './pagination-with-icons/pagination-with-icons.component';
import { PreviousAndNextWithIconsComponent } from './previous-and-next-with-icons/previous-and-next-with-icons.component';
import { PreviousAndNextComponent } from './previous-and-next/previous-and-next.component';
import { TableDataPaginationWithIconsComponent } from './table-data-pagination-with-icons/table-data-pagination-with-icons.component';
import { TableDataPaginationComponent } from './table-data-pagination/table-data-pagination.component';

const PaginationPage: NgDocPage = {
  title: `Pagination`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.pagination.order,
  demos: {
    DefaultPaginationComponent,
    PaginationWithIconsComponent,
    PreviousAndNextComponent,
    PreviousAndNextWithIconsComponent,
    TableDataPaginationComponent,
    TableDataPaginationWithIconsComponent,
  },
};

export default PaginationPage;
