import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsArticle
      img='React Logo With Cat Hanging Off It'
      headline='Student Learns React'
      description='He failed to learn React. The End.'
      url='www.CatReact.com' />);

    expect(wrapper).toMatchSnapshot();
  });
});