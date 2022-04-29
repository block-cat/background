import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import UserPage from 'flarum/components/UserPage';
import DiscussionPage from 'flarum/components/DiscussionPage';
import TagsPage from 'flarum/tags/components/TagsPage';
import Navigation from 'flarum/components/Navigation';

app.initializers.add('block-cat/background', () => {
  extend(Navigation.prototype, 'view', function() {
    if (app.forum.attribute('block-cat.backType') === 'video') {
      if (window.matchMedia("(min-width: 426px)").matches) {
        if (app.current.matches(IndexPage)) {
          addBackgroundVideo(app.forum.attribute('block-cat.videoURL'));
        } else if (app.current.matches(TagsPage)) {
          addBackgroundVideo(app.forum.attribute('block-cat.videoURL'));
        } else if (app.current.matches(DiscussionPage)) {
          removeBackgroundVideo();
        } else if (app.current.matches(UserPage)) {
          removeBackgroundVideo();
        } else {
          addBackgroundVideo(app.forum.attribute('block-cat.videoURL'));
        }
        if ($('#content > .FlarumBlogOverview').length !== 0) {
          $('.App.BlogOverviewPage').css('background', 'initial');
        }
      }
    }

    if (app.forum.attribute('block-cat.backType') === 'image') {
      if (window.matchMedia("(min-width: 426px)").matches) {
        if (app.current.matches(IndexPage)) {
          addBackgroundImage(app.forum.attribute('block-cat.imageURL'));
        } else if (app.current.matches(TagsPage)) {
          addBackgroundImage(app.forum.attribute('block-cat.imageURL'));
        } else if (app.current.matches(DiscussionPage)) {
          removeBackgroundImage();
        } else if (app.current.matches(UserPage)) {
          removeBackgroundImage();
        } else {
          addBackgroundImage(app.forum.attribute('block-cat.imageURL'));
        }
        if ($('#content > .FlarumBlogOverview').length !== 0) {
          $('.App.BlogOverviewPage').css('background', 'initial');
        }
      }
    }
    
    if (app.forum.attribute('block-cat.backType') === 'color') {
      if (window.matchMedia("(min-width: 426px)").matches) {
        if (app.current.matches(IndexPage)) {
          addBackgroundColor(app.forum.attribute('block-cat.color'));
        } else if (app.current.matches(TagsPage)) {
          addBackgroundColor(app.forum.attribute('block-cat.color'));
        } else if (app.current.matches(DiscussionPage)) {
          removeBackgroundColor();
        } else if (app.current.matches(UserPage)) {
          removeBackgroundColor();
        } else {
          addBackgroundColor(app.forum.attribute('block-cat.color'));
        }
        if ($('#content > .FlarumBlogOverview').length !== 0) {
          $('.App.BlogOverviewPage').css('background', 'initial');
        }
      }
    }
  });
});

function addBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function removeBackgroundColor() {
  document.querySelector('body').style.backgroundColor = "";
}

function addBackgroundImage(url) {
  document.querySelector('body').style.backgroundImage = "url('"+ url +"')";
}

function removeBackgroundImage() {
  document.querySelector('body').style.backgroundImage = "";
}

function addBackgroundVideo(url) {
  if ($('body').find('video').length == 0) {
    $('body').append(
      '<video id="videoBackground" autoplay muted loop>\
      <source src="'+ url +'" type="video/mp4">\
      Your browser does not support HTML5 video.\
      </video>'
    );
  }
}

function removeBackgroundVideo() {
  if ($('body').find('video').length == 1) {
    $('video').remove();
  }
}