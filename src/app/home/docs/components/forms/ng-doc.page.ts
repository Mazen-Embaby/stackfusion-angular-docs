import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DefaultFormComponent } from './default-form/default-form.component';
import { DisabledInputsComponent } from './disabled-inputs/disabled-inputs.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HelperTextComponent } from './helper-text/helper-text.component';
import { InputElementWithAddonComponent } from './input-element-with-addon/input-element-with-addon.component';
import { InputElementWithIconComponent } from './input-element-with-icon/input-element-with-icon.component';
import { InputSizesComponent } from './input-sizes/input-sizes.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { ShadowInputsComponent } from './shadow-inputs/shadow-inputs.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';

const FormsPage: NgDocPage = {
  title: `Forms`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.forms.order,
  demos: {
    DefaultFormComponent,
    FloatingLabelsComponent,
    InputSizesComponent,
    DisabledInputsComponent,
    ShadowInputsComponent,
    HelperTextComponent,
    InputElementWithIconComponent,
    InputElementWithAddonComponent,
    FormValidationComponent,
    TextareaComponent,
    SelectInputComponent,
    CheckboxComponent,
    RadioButtonsComponent,
    FileUploadComponent,
    ToggleSwitchComponent,
  },
};

export default FormsPage;
