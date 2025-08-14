import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { DocCompTitleOrder } from '../comp-order';
import { CardWithApiKeysComponent } from './card-with-api-keys/card-with-api-keys.component';
import { CopyButtonWithModalComponent } from './copy-button-with-modal/copy-button-with-modal.component';
import { CopyButtonWithTextComponent } from './copy-button-with-text/copy-button-with-text.component';
import { CopyContactDetailsComponent } from './copy-contact-details/copy-contact-details.component';
import { CopySourceCodeBlockComponent } from './copy-source-code-block/copy-source-code-block.component';
import { DefaultCopyToClipboardComponent } from './default-copy-to-clipboard/default-copy-to-clipboard.component';
import { InputGroupWithCopyComponent } from './input-group-with-copy/input-group-with-copy.component';
import { InputWithCopyButtonComponent } from './input-with-copy-button/input-with-copy-button.component';
import { UrlShortenerInputGroupComponent } from './url-shortener-input-group/url-shortener-input-group.component';

/**
 * @status:info SOON
 */
const ClipboardPage: NgDocPage = {
  title: `Clipboard`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.clipboard.order,
  demos: {
    DefaultCopyToClipboardComponent,
    InputWithCopyButtonComponent,
    CopyButtonWithTextComponent,
    InputGroupWithCopyComponent,
    UrlShortenerInputGroupComponent,
    CopySourceCodeBlockComponent,
    CardWithApiKeysComponent,
    CopyContactDetailsComponent,
    CopyButtonWithModalComponent,
  },
};

export default ClipboardPage;
