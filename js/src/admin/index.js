import BackgroundSettings from './components/BackgroundSettings';

app.initializers.add('block-cat/background', () => {
  app.extensionData.for('block-cat-background')
    .registerPage(BackgroundSettings);
});
