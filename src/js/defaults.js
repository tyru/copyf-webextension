
export default {
  formats: [
    {name: 'default', text: '⟦$(title)⟧ $(url)'},
    {name: 'links', text: '$(property|shrink href a)'},
    {name: 'quote', text: '"$(selected)" ⟦$(title)⟧ $(url)'},
    {name: 'markdown', text: '[$(title)]($(url))'},
    {name: 'markdown-image', text: '![$(title)]($(url))'},
  ],
  newFormat: {
    name: '', text: '$(title) - $(url)'
  }
};
