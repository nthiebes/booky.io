const extensionIds = {
  development: 'cdgbikmincdhncjonjcldflnkdbmbgco',
  production: 'pmcpkkipiedakcaolhnbijibndfemckf'
};

export const config = {
  extensionId: process.env.NODE_ENV === 'development' ? extensionIds.development : extensionIds.production
};
