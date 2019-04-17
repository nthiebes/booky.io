export default {
  user: {
    loggedIn: false,
    name: '',
    email: '',
    title: '',
    new: true,
    premium: false,
    settings: {
      blurEffect: true,
      darkMode: false,
      dashboardsStyle: 'sidebar',
      maxWidth: false,
      navigationBarColor: 0,
      openLinksInNewTab: true,
      pinned: true,
      preserveEditMode: true,
      stickyHeader: true,
      stickyToolbar: true,
      autofillBookmarkNames: true,
      colorScheme: 1,
      defaultDashboardId: -1,
      enableNotes: true
    }
  },
  dashboards: {
    items: [],
    active: null
  },
  categories: [{
    id: '666',
    name: 'Banana',
    color: 0,
    bookmarks: [{
      id: 111,
      name: 'Awesome website',
      url: 'https://booky.io',
      favicon: 'https://booky.io/favicon.ico',
      note: 'username: gscheid'
    }, {
      id: 42,
      name: 'Awesome website 2',
      url: 'https://booky.io',
      favicon: 'https://booky.io/favicon.ico',
      note: 'username: gscheid'
    }]
  }],
  sidebar: {
    open: false
  },
  toolbar: {
    currentlySticky: true
  },
  modal: {
    modal: null,
    open: false,
    data: {},
    pending: false
  }
};
