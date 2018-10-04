import { configure, setAddon} from '@storybook/react';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

import '../_source/templates/booky/Booky.scss';
import './styles.scss';

const req = require.context('../_source', true, /\.stories\.js$/);

setAddon(chaptersAddon);
setDefaults({
  sectionOptions: {
    useTheme: false,
    showSource: false,
    allowSourceToggling: false,
    showPropTables: false,
    allowPropTablesToggling: false
  }
});

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
