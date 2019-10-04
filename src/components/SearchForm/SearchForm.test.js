import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let wrapper;
  const mockSearchArticles = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<SearchForm searchArticles={mockSearchArticles} />)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to handle change in state based on an event', () => {
    //Setup
    const mockEvent = {
      target: {
        name: 'search',
        value: 'Chicken'
      }
    };

    //Execution
    wrapper.instance().handleChange(mockEvent);

    //Expectation
    expect(wrapper.state()).toEqual({ search: 'Chicken' })
  });

  it('should be able to reset its own state', () => {
    //Setup
    const newState = { search: 'Chicken' };
    const clearedState = { search: '' };

    //Execution
    wrapper.setState(newState);
    expect(wrapper.state()).toEqual(newState);

    wrapper.instance().resetState();

    //Expectation
    expect(wrapper.state()).toEqual(clearedState);
  });

  it('should handle search when search button is clicked', () => {
    //Setup
    const newState = { search: 'Chicken' };
    wrapper.setState(newState);
    console.log(wrapper.find('button'))
    //Execution
    wrapper.find('button').simulate('click');

    //Expectation
    expect(mockSearchArticles).toHaveBeenCalledWith('Chicken');
  })
});
