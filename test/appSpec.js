import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from 'src/app';
import $ from 'jquery';

describe('App', ()=> {

    var app, appBlockNode, header; 

    beforeEach(function () {


        app = TestUtils.renderIntoDocument(<App />);
        header = $('h1');

        appBlockNode = TestUtils.scryRenderedDOMComponentsWithClass(app, 'welcome');

    });

    it('should render some code', () => {

        expect(header.text()).toEqual('Richard');
    });
});