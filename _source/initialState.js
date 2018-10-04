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
    items: [{id: 1234, name: 'Meine Rezepte', categories: []}, {id: 90454, name: 'Deutsche Filme', categories: []}, {id: 789, name: 'Deutsche Filme', categories: []}, {id: 567, name: 'Deutsche Filme', categories: []}, {id: 45345, name: 'Deutsche Filme', categories: []}],
    active: 1234,
    offset: 3,
    sidebar: true
  },
  categories: [],
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
