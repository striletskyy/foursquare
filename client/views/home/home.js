var helper = {
  _buildQuery: function() {
    var params = {
      ll: Template.Maps.mapHelper.ll.B.toString() + "," + Template.Maps.mapHelper.ll.k.toString(),
      radius: Template.Maps.mapHelper.radius || 2500,
      query: $('#venues').val()
    };
    return params;
  },
  getQuery: function() {
    var now = new Date();
    var date = now.getYear().toString() + now.getMonth().toString() + now.getDay().toString();
    var data = helper._buildQuery();
    var query = "ll=" + data.ll +
                "&radius=" + data.radius +
                "&query=" + data.query +
                "&oauth_token=" + Meteor.user().services.foursquare.accessToken.toString() +
                "&v=" + date;
    return query;
  }
};
/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Template.Home.events({
  'keyup #venues': function(e) {
    if (e.keyCode == 13) {
      console.log("Hello ", helper.getQuery());
    }
  }
});

Template.Home.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
