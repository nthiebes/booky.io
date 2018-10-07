export default {
  user: {
    loggedIn: false,
    navColor: '0',
    newtab: true,
    pinned: true,
    dashboards: 'sidebar',
    maxWidth: true,
    preserveEditMode: true
  },
  dashboards: {
    items: [{id: 1234, name: 'Meine Rezepte', categories: []}],
    active: 1234,
    offset: 3,
    sidebar: true
  },
  categories: [{
    id: '666',
    name: 'Banana',
    color: '0',
    bookmarks: [{
      id: '111',
      name: 'Awesome website',
      url: 'https://booky.io',
      favicon: 'https://booky.io/favicon.ico',
      note: 'username: gscheid'
    }]
  }],
  sidebar: {
    open: false
  },
  toolbar: {
    sticky: true,
    currentlySticky: true
  },
  modal: {
    modal: null,
    open: false,
    data: {},
    pending: false
  }
};
