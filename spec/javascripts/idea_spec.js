describe('idea-bin test suite', function () {

  it('is wired up', function () {
    assert(true);
  });

  it('actually works', function () {
    MagicLamp.load('ideas/index');
    assert.equal($('.ideas').length, 1);
  });

  it('makes an AJAX call and gets 2 ideas back', function () {
    MagicLamp.load('ideas/index');
    $.getJSON('/ideas').then(function (ideas) {
      assert.equal(ideas.idea.length, 2);
      done();
    });
  });

});
