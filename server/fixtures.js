if (Cards.find().count() === 0) {
  Cards.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Cards.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Cards.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}