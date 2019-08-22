import * as yoga from 'yoga-layout';
import { uiWorker } from 'react-figma';

onmessage = event => {
    uiWorker({ yoga })(event);
};
