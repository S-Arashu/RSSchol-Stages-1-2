import '../public/styles.css';

import createTitleApp from './builders/app';
import { create } from './builders/mainBlock';

const title = createTitleApp();

document.body.append(title);

create(title);
