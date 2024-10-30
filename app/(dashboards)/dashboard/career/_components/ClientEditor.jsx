"use client";

import { Editor } from '@tinymce/tinymce-react';

export default function ClientEditor({ value, onChange, editorStyles }) {
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      value={value}
      onEditorChange={onChange}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'help', 'wordcount',
          'emoticons', 'quickbars', 'pagebreak'
        ],
        toolbar: [
          'undo redo | formatselect | bold italic underline strikethrough | ' +
          'alignleft aligncenter alignright alignjustify | ' +
          'bullist numlist outdent indent',
          
          'table image media | link anchor codesample | pagebreak | ' +
          'fontfamily fontsize | removeformat | help',
          
          'preview code fullscreen | searchreplace | emoticons'
        ],
        toolbar_mode: 'sliding',
        contextmenu: 'link image table',
        font_family_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n',
        fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
        content_style: editorStyles,
        image_advtab: true,
        image_caption: true,
        automatic_uploads: true,
        file_picker_types: 'image',
        paste_data_images: true,
        link_context_toolbar: true,
        link_assume_external_targets: true,
        target_list: [
          { title: 'None', value: '' },
          { title: 'New window', value: '_blank' },
          { title: 'Same window', value: '_self' }
        ],
        table_default_attributes: {
          border: '1',
          class: 'basic'
        },
        table_default_styles: {
          width: '100%'
        },
        table_class_list: [
          {title: 'Basic Table', value: 'basic'},
          {title: 'Striped Table', value: 'basic striped'},
          {title: 'Modern Table', value: 'modern'},
          {title: 'Compact Table', value: 'basic compact'},
          {title: 'Hover Table', value: 'basic hover'}
        ],
        table_responsive_width: true,
        table_sizing_mode: 'relative',
        table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
        style_formats: [
          {
            title: 'Headings',
            items: [
              { title: 'Heading 1', format: 'h1' },
              { title: 'Heading 2', format: 'h2' },
              { title: 'Heading 3', format: 'h3' }
            ]
          },
          {
            title: 'Inline',
            items: [
              { title: 'Bold', format: 'bold' },
              { title: 'Italic', format: 'italic' },
              { title: 'Underline', format: 'underline' },
              { title: 'Strikethrough', format: 'strikethrough' },
              { title: 'Superscript', format: 'superscript' },
              { title: 'Subscript', format: 'subscript' },
              { title: 'Code', format: 'code' }
            ]
          }
        ],
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        quickbars_insert_toolbar: 'quickimage quicktable quicklink'
      }}
    />
  );
} 