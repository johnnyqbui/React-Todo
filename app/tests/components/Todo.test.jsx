import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import Todo from 'Todo';

describe('Todo', ()=> {
	it('should exist', ()=> {
		expect(Todo).toExist();
	});
});