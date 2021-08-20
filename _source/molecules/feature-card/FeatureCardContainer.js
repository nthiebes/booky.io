import { connect } from 'react-redux';

import { FeatureCard } from './FeatureCard';

const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode
});

export const FeatureCardContainer = connect(mapStateToProps)(FeatureCard);
