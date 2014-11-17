/*****************************************************************************/
/* Login: Event Handlers and Helpers */
/*****************************************************************************/
Template.Login.events({
  'click .google': function(e) {
    Meteor.signInWithGoogle({}, function(err, res) {
      $('.google').addClass('disabled');
      if(App.helpers.accounts.isFoursquareAuth()) {
        $('.foursquare').addClass('disabled');
      }
    });
  },
  'click .foursquare': function(e) {
    Meteor.signInWithFoursquare({}, function(err, res) {
      $('.foursquare').addClass('disabled');
      if(App.helpers.accounts.isGoogleAuth()) {
        $('.google').addClass('disabled');
      }
    });
  }
});

Template.Login.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};
