export const getActiveDashboardId = (state) => {
  const urlId = Number(window.location.hash.replace('#', ''));
  const backendId = state.user.settings.defaultDashboardId;

  return urlId || backendId;
};
