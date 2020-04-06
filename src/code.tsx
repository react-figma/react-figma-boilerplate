import { subscribeOnMessages } from 'react-figma';

figma.showUI(__html__);

figma.ui.onmessage = (message) => {
  subscribeOnMessages(message);
};
