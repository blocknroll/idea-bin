# setup fixtures, grab template,
# and make it available for our tests
MagicLamp.fixture do
  Idea.create(title: 'note 1', body: 'this is a note')
  Idea.create(title: 'note 2', body: 'notes are good')
  render template: 'ideas/index'
end
