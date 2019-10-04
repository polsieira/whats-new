import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  let wrapper;
  const mockChangeState = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Menu
      changeState={mockChangeState} />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('should call change state when any category is clicked', () => {
    it('category: local', () => {
      //Setup
      const mockEvent = {
        target: {
          id: 'local'
        }
      };

      //Execution
      wrapper.find('li').at(0).simulate('click', mockEvent);

      //Expectation
      expect(mockChangeState).toHaveBeenCalledWith(mockEvent);
    });
    it('category: technology', () => {
      //Setup
      const mockEvent = {
        target: {
          id: 'technology'
        }
      };

      //Execution
      wrapper.find('li').at(1).simulate('click', mockEvent);

      //Expectation
      expect(mockChangeState).toHaveBeenCalledWith(mockEvent);
    });
    it('category: entertainment', () => {
      //Setup
      const mockEvent = {
        target: {
          id: 'entertainment'
        }
      };

      //Execution
      wrapper.find('li').at(2).simulate('click', mockEvent);

      //Expectation
      expect(mockChangeState).toHaveBeenCalledWith(mockEvent);
    });
    it('category: science', () => {
      //Setup
      const mockEvent = {
        target: {
          id: 'science'
        }
      };

      //Execution
      wrapper.find('li').at(3).simulate('click', mockEvent);

      //Expectation
      expect(mockChangeState).toHaveBeenCalledWith(mockEvent);
    });
    it('category: health', () => {
      //Setup
      const mockEvent = {
        target: {
          id: 'health'
        }
      };

      //Execution
      wrapper.find('li').at(4).simulate('click', mockEvent);

      //Expectation
      expect(mockChangeState).toHaveBeenCalledWith(mockEvent);
    });
  })
});