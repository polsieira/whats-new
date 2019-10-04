import React from 'react';
import { shallow } from "enzyme";
import ReactDOM from 'react-dom';
import App from './App';
import health from '../../data/health';
import local from '../../data/local';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state current category and displayed articles when change state is called', () => {
    //Setup
    const mockEvent = {
      target: {
        id: 'health'
      }
    };
    const expected = health;

    //Execution
    wrapper.instance().changeState(mockEvent);

    //Expectation
    expect(wrapper.state('currentCategory')).toEqual(expected);
  });

  it('should search articles and only display results', () => {
    //Setup
    const mockSearchedText = 'Chicken';

    wrapper.setState({
      currentCategory: local,
      displayedArticles: local
    });

    //Execution
    wrapper.instance().searchArticles(mockSearchedText);

    //Expectation
    expect(wrapper.state('displayedArticles')).toEqual()
  });
});
