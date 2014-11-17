/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
  accounts: {
    isGoogleAuth: function() {
      return (!!Meteor.user()) &&
        (!!Meteor.user().services) &&
        (!!Meteor.user().services.google);
    },
    isFoursquareAuth: function() {
      return (!!Meteor.user()) &&
        (!!Meteor.user().services) &&
        (!!Meteor.user().services.foursquare);
    },
    isAllAuth: function() {
      return this.isGoogleAuth() && this.isFoursquareAuth();
    }
  }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});
