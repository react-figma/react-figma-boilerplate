import { subscribeOnMessages } from 'react-figma';

figma.showUI(__html__, { visible: false });

figma.ui.onmessage = message => {
  subscribeOnMessages(message);
};