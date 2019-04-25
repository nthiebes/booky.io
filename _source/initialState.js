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
    active: null,
    pending: false,
    error: null
  },
  categories: [],
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
