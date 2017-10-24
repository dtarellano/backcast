var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    
    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
    
    this.list = new VideoListView();
    
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')
});
