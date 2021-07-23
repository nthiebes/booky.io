export default {
  user: {
    loggedIn: false,
    name: '',
    email: '',
    title: '',
    new: true,
    premium: false,
    isMobile: window.matchMedia('(max-width: 1000px)').matches,
    isBeta: Boolean(window.location.host.match(/beta./gi)),
    supportAmount: null,
    settings: {
      blurEffect: false,
      darkMode: false,
      dashboardsStyle: 'sidebar',
      maxWidth: false,
      navigationBarColor: 0,
      openLinksInNewTab: true,
      pinned: true,
      stickyHeader: false,
      stickyToolbar: true,
      autofillBookmarkNames: true,
      colorScheme: 0,
      defaultDashboardId: null,
      enableNotes: true,
      categoriesLayout: 'grid',
      bookmarkEditOnHover: true,
      autofocusSearch: false,
      minimalBookmarkButton: false,
      closeEditMode: true,
      maxColumnCount: null,
      newsVersion: 0,
      voted: 0
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
    currentlySticky: false
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
  },
  dragging: {
    isDragging: false,
    type: null
  },
  extension: {
    active: Boolean(window.location.pathname.match(/extension/gi)),
    page: {
      description: '',
      url: '',
      title: ''
    }
  }
};
