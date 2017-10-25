var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({model: video}).render().el;
      })
    );
    return this;
  },
  // renderVideo: function(video) {
  //   console.log(video);
  //   var videoEntry = new VideoListEntryView({model: video});
  //   this.$el.append(videoEntry.render());
  // },

  template: templateURL('src/templates/videoList.html')

});
