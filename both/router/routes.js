/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.route('/', {
  name: "home",
  Controller: 'HomeController'
});

Router.route('/login', {
  name: "login",
  action: function() {
    if(App.helpers.accounts.isAllAuth()) {
      this.render("Home");
    } else {
      this.render("Login");
    }
  }
});