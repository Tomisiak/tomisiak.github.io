(function() {
  $(function() {
    var tagArray;
    Array.prototype.remove = function(e) {
      var ref, t;
      if ((t = this.indexOf(e)) > -1) {
        return ([].splice.apply(this, [t, t - t + 1].concat(ref = [])), ref);
      }
    };
    tagArray = [];
    return $('.blocks').on('click', '.btn', function() {
      if ($(this).hasClass('active')) {
        return tagArray.remove($(this).attr('id'));
      } else {
        return tagArray.push($(this).attr('id'));
      }
    });
  });

}).call(this);
