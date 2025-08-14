import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { CleanChatBubbleComponent } from './clean-chat-bubble/clean-chat-bubble.component';
import { CleanFileAttachmentComponent } from './clean-file-attachment/clean-file-attachment.component';
import { CleanImageAttachmentComponent } from './clean-image-attachment/clean-image-attachment.component';
import { CleanImageGalleryComponent } from './clean-image-gallery/clean-image-gallery.component';
import { CleanUrlPreviewSharingComponent } from './clean-url-preview-sharing/clean-url-preview-sharing.component';
import { CleanVoiceNoteComponent } from './clean-voice-note/clean-voice-note.component';
import { DefaultChatBubbleComponent } from './default-chat-bubble/default-chat-bubble.component';
import { FileAttachmentComponent } from './file-attachment/file-attachment.component';
import { ImageAttachmentComponent } from './image-attachment/image-attachment.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { OutlineChatBubbleComponent } from './outline-chat-bubble/outline-chat-bubble.component';
import { OutlineFileAttachmentComponent } from './outline-file-attachment/outline-file-attachment.component';
import { OutlineImageAttachmentComponent } from './outline-image-attachment/outline-image-attachment.component';
import { OutlineImageGalleryComponent } from './outline-image-gallery/outline-image-gallery.component';
import { OutlineUrlPreviewSharingComponent } from './outline-url-preview-sharing/outline-url-preview-sharing.component';
import { OutlineVoiceNoteComponent } from './outline-voice-note/outline-voice-note.component';
import { UrlPreviewSharingComponent } from './url-preview-sharing/url-preview-sharing.component';
import { VoiceNoteMessageComponent } from './voice-note-message/voice-note-message.component';

const ChatBubblePage: NgDocPage = {
  title: `Chat Bubble`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.chatBubble.order,
  demos: {
    DefaultChatBubbleComponent,
    VoiceNoteMessageComponent,
    FileAttachmentComponent,
    ImageAttachmentComponent,
    ImageGalleryComponent,
    UrlPreviewSharingComponent,
    OutlineChatBubbleComponent,
    OutlineVoiceNoteComponent,
    OutlineFileAttachmentComponent,
    OutlineImageAttachmentComponent,
    OutlineImageGalleryComponent,
    OutlineUrlPreviewSharingComponent,
    CleanChatBubbleComponent,
    CleanVoiceNoteComponent,
    CleanFileAttachmentComponent,
    CleanImageAttachmentComponent,
    CleanImageGalleryComponent,
    CleanUrlPreviewSharingComponent,
  },
};

export default ChatBubblePage;
