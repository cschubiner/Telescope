Template[getTemplate('postInfo')].helpers({
  pointsUnitDisplayText: function(){
    return this.baseScore == 1 ? i18n.t('point') : i18n.t('points');
  },
  getTemplate: function() {
    return getTemplate("postAuthor");
  }
});
