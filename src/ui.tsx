import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as yoga from 'yoga-layout-prebuilt';
import { uiWorker } from 'react-figma';
import { App } from './App';


const handler = uiWorker({ yoga, fetch });

onmessage = event => {
    handler(event);
};

ReactDom.render(<App />, document.getElementById('app'));
