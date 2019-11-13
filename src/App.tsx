import * as React from 'react';
import { Page, Rectangle, Text } from 'react-figma';

export const App = () => {
    return (
        <Page isCurrent name="Page X">
            <Text characters="Hello, react-figma!"/>
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0ddd25' }} />
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#a6dd00' }} />
        </Page>
    );
};
