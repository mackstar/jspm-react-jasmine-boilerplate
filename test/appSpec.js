import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from 'src/app';

describe('App', ()=> {

    var app, appBlockNode; 

    beforeEach(function () {


        app = TestUtils.renderIntoDocument(<App />);
        appBlockNode = TestUtils.scryRenderedDOMComponentsWithClass(app, 'welcome');

    });

    it('should render some code', () => {

        expect(appBlockNode.length).toEqual(1);
    });
});