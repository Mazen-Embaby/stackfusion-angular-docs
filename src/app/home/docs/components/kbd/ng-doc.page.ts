import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { ArrowKeysComponent } from './arrow-keys/arrow-keys.component';
import { DefaultKbdComponent } from './default-kbd/default-kbd.component';
import { FunctionKeysComponent } from './function-keys/function-keys.component';
import { KbdInsideTableComponent } from './kbd-inside-table/kbd-inside-table.component';
import { KbdInsideTextComponent } from './kbd-inside-text/kbd-inside-text.component';
import { LetterKeysComponent } from './letter-keys/letter-keys.component';
import { NumberKeysComponent } from './number-keys/number-keys.component';

const KBDPage: NgDocPage = {
  title: `KBD`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.kbd.order,
  demos: {
    DefaultKbdComponent,
    KbdInsideTextComponent,
    KbdInsideTableComponent,
    ArrowKeysComponent,
    LetterKeysComponent,
    NumberKeysComponent,
    FunctionKeysComponent,
  },
};

export default KBDPage;
