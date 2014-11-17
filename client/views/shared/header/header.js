/*****************************************************************************/
/* Header: Event Handlers and Helpers */
/*****************************************************************************/
Template.Header.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Header.helpers({
  firstName: function() {
    if(App.helpers.accounts.isAllAuth()) {
      return Meteor.user().profile.firstName;
    } else {
      return null;
    }
  },
  lastName: function() {
    if(App.helpers.accounts.isAllAuth()) {
      return Meteor.user().profile.lastName;
    } else {
      return null;
    }
  },
  isAllAuth: function() {
    return App.helpers.accounts.isAllAuth();
  }
});

/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.Header.created = function () {
};

Template.Header.rendered = function () {
};

Template.Header.destroyed = function () {
};
