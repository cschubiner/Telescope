Template[getTemplate('postUpvote')].helpers({
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.upvoters, user._id);
  },
  downvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.downvoters, user._id);
  },
  voted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return  _.include(this.upvoters, user._id) || _.include(this.downvoters, user._id);
  }
});

Template[getTemplate('postUpvote')].events({
  'click .upvotelinkclay': function(e, instance){
    var post = this;
    e.preventDefault();
    if(!Meteor.user()){
      Router.go('atSignIn');
      flashMessage(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('upvotePost', post, function(error, result){
      trackEvent("post upvoted", {'_id': post._id});
    });
  },
  'click .downvotelinkclay': function(e, instance){
    var post = this;
    e.preventDefault();
    if(!Meteor.user()){
      Router.go('atSignIn');
      flashMessage(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('downvotePost', post, function(error, result){
      trackEvent("post downvoted", {'_id': post._id});
    });
  },
  'click .unvotelinkclay': function(e, instance){
    var post = this;
    e.preventDefault();
    if(!Meteor.user()){
      Router.go('atSignIn');
      flashMessage(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call('cancelUpvotePost', post, function(error, result){
      trackEvent("post cancelUpvotePost", {'_id': post._id});
    });
    Meteor.call('cancelDownvotePost', post, function(error, result){
      trackEvent("post cancelDownvotePost", {'_id': post._id});
    });
  },
});
