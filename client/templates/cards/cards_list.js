var cardData = [
  {
    title: 'Updates',
    url: 'http://sachagreif.com/introducing-telescope/'
  }, 
  {
    title: 'Activity',
    url: 'http://meteor.com'
  }, 
  {
    title: 'Store',
    url: 'http://themeteorbook.com'
  }
];
Template.cardsList.helpers({
  cards: cardData
});