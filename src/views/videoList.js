var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    // was looking at videoListEntrySpec 
    // assumed that we would be able to loop through exampleVideoData, but currently unable to
    // exampleVideoData is returning undefined
    
    // for (var i = 0; i < window.exampleVideoData.length; i++) {
    //   var model = new Video(window.exampleVideoData[i]);
    //   var view = new VideoListEntryView({ model: model });
    //   this.render();
    // }
    
    this.render(); 
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
