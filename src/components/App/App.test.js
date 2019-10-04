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
    expect(wrapper.state('displayedArticles')).toEqual([{
      "description": "The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.",
      "headline": "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner",
      "id": 2,
      "img": "https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376", "url": "https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/"
    }])
  });
});
