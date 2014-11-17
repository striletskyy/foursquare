Meteor.startup( function () {
  ServiceConfiguration.configurations.remove({
    "service": "google"
  });
  ServiceConfiguration.configurations.insert({
    "service": "google",
    "clientId": "581798009459-qj541h4rtisof7cl3p85fmh08321lsk2.apps.googleusercontent.com",
    "secret": "GTWFbom5w2Phu4W6HbSsykFH"
  });
});