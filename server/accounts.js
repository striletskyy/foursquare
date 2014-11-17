Meteor.startup( function () {
  ServiceConfiguration.configurations.remove({
    "service": "google"
  });
  ServiceConfiguration.configurations.insert({
    "service": "google",
    "clientId": "581798009459-qj541h4rtisof7cl3p85fmh08321lsk2.apps.googleusercontent.com",
    "secret": "GTWFbom5w2Phu4W6HbSsykFH"
  });
  ServiceConfiguration.configurations.remove({
    "service": "foursquare"
  });
  ServiceConfiguration.configurations.insert({
    "service": "foursquare",
    "clientId": "0QE2FD14PF4ZI0FUU5BOTCIAMKSJRARNCQQWX5ZGFVXLPNA2",
    "secret": "ADKV0NA4TXOWM1MBFSQSSYQTVDOXYENCGR1VW1CF54R4QSJQ"
  });
});