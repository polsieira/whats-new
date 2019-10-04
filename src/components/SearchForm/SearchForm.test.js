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

  it('should run handleChange on change of the input', () => {
    //Setup
    const mockEvent = {
      target: {
        name: 'search',
        value: 'Chick'
      }
    }
    wrapper.instance().handleChange = jest.fn();

    //Execution
    wrapper.find('input').simulate('change', mockEvent);

    //Expectation
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
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

  it('should call searchArticles and resetState when handleSearch is called with an event', () => {
    //Setup
    const newState = { search: 'Chicken' };
    wrapper.setState(newState);
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().resetState = jest.fn();

    //Execution
    wrapper.instance().handleSearch(mockEvent);

    //Expectation
    expect(wrapper.instance().resetState).toHaveBeenCalled();
    expect(mockSearchArticles).toHaveBeenCalledWith('Chicken');

  });

  it('should call handle search when search button is clicked', () => {
    //Setup
    wrapper.instance().handleSearch = jest.fn();

    //Execution
    wrapper.find('button').simulate('click');

    //Expectation
    expect(wrapper.instance().handleSearch).toHaveBeenCalled();
  });
});
