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
      stickyHeader: false,
      stickyToolbar: true,
      autofillBookmarkNames: true,
      colorScheme: 0,
      defaultDashboardId: null,
      enableNotes: true,
      categoriesLayout: 'grid'
    }
  },
  dashboards: {
    items: [],
    pending: false,
    error: null
  },
  categories: [],
  categoriesSorting: {
    items: [],
    pending: false,
    error: null
  },
  sidebar: {
    open: false
  },
  toolbar: {
    currentlySticky: true
  },
  modal: {
    modal: null,
    open: false,
    showModal: false,
    data: {}
  },
  search: {
    keyword: '',
    pending: false,
    error: null,
    total: null,
    offset: 0,
    limit: 30,
    dashboards: []
  }
};
