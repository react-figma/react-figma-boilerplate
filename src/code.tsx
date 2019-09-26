import * as React from 'react';
import { render, subscribeOnMessages } from 'react-figma';
import { App } from './App';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
  subscribeOnMessages(message);
};

(async () => {
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
    render(<App />, figma.root);
})();
