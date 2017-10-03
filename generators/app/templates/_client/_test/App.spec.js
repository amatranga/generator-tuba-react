import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('Should exist', () => {
    expect(wrapper).to.exist;
  });
})
