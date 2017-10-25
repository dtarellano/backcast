var Videos = Backbone.Collection.extend({

  model: Video,
  
  initialize: function() {
    this.search();
  },
  
  search: function () {
    // Backbone.ajax({
    //   url: 'https://www.googleapis.com/youtube/v3/search',
    //   type: 'GET',
    //   data: {'maxResults': '5', 'key': window.YOUTUBEKEY, 'q': 'surfing'},
    //   success: function (data) {
    //     console.log('sent', data);
    //   },
    //   error: function(data) {
    //     console.error('failed');
    //   }
    // });
  }
  

});

