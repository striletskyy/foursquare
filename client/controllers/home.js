HomeController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
  },

  action: function () {
    if(App.helpers.accounts.isAllAuth()) {
      this.render("Home");
    } else {
      this.render("Login");
    }
  }
});
