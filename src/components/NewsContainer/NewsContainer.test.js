import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';
import local from '../../data/local';

describe('NewsContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsContainer displayedArticles={local} />);

    expect(wrapper).toMatchSnapshot();
  });
});