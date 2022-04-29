import ExtensionPage from 'flarum/common/components/ExtensionPage';
import app from 'flarum/app';
import Select from 'flarum/common/components/Select';
import saveSettings from 'flarum/utils/saveSettings';

export default class BackgroundSettings extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.backTypeOptions = {
      'none': app.translator.trans('block-cat-background.admin.settings.none_type_option'),
      'video': app.translator.trans('block-cat-background.admin.settings.video_type_option'),
      'image': app.translator.trans('block-cat-background.admin.settings.image_type_option'),
      'color': app.translator.trans('block-cat-background.admin.settings.color_type_option'),
    };

    this.backType = app.data.settings["block-cat.back_type"];
    this.videoURL = app.data.settings["block-cat.video_url"];
    this.imageURL = app.data.settings["block-cat.image_url"];
    this.color = app.data.settings["block-cat.color"];
  }

  content() {
    return [
      m('.ExtensionPage-settings', [
        m('.container', [
          m('Form', [
            m('.Form-group', [
              m('label', app.translator.trans('block-cat-background.admin.settings.back_type_label')),
              m('.helpText', app.translator.trans('block-cat-background.admin.settings.back_type_text')),
              Select.component({
                options: this.backTypeOptions,
                value: this.backType || 'none',
                onchange: (e) => {
                  this.backType = e;
                  saveSettings({["block-cat.back_type"]: this.backType});
                },
              }),
            ]),
            this.backType === 'video' ?
              m('.Form-group', [
                m('label', app.translator.trans('block-cat-background.admin.settings.video_type_label')),
                m('.helpText', app.translator.trans('block-cat-background.admin.settings.video_type_text')),
                m('input.FormControl', {
                  type: 'text',
                  placeholder: app.translator.trans('block-cat-background.admin.settings.video_type_placeholder'),
                  value: this.videoURL,
                  oninput: (e) => {
                    this.videoURL = e.target.value;
                    saveSettings({["block-cat.video_url"]: this.videoURL});
                  }
                })
              ]) : '',
            this.backType === 'image' ?
              m('.Form-group', [
                m('label', app.translator.trans('block-cat-background.admin.settings.image_type_label')),
                m('.helpText', app.translator.trans('block-cat-background.admin.settings.image_type_text')),
                m('input.FormControl', {
                  type: 'text',
                  placeholder: app.translator.trans('block-cat-background.admin.settings.image_type_placeholder'),
                  value: this.imageURL,
                  oninput: (e) => {
                    this.imageURL = e.target.value;
                    saveSettings({["block-cat.image_url"]: this.imageURL});
                  }
                })
              ]) : '',
            this.backType === 'color' ?
              m('.Form-group', [
                m('label', app.translator.trans('block-cat-background.admin.settings.color_type_label')),
                m('.helpText', app.translator.trans('block-cat-background.admin.settings.color_type_text')),
                m('input.FormControl', {
                  type: 'text',
                  placeholder: '#008833',
                  value: this.color,
                  oninput: (e) => {
                    this.color = e.target.value;
                    saveSettings({["block-cat.color"]: this.color});
                  }
                })
              ]) : '',
          ]),
        ]),
      ]),
    ];
  }
}