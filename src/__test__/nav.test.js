import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../routers/nav';

describe('Nav component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain the back button', () => {
    const component = renderer.create(<Nav />);
    const instance = component.root;
    expect(instance.findByProps({ className: 'back_button' })).toBeDefined();
  });

  it('should contain the most views option', () => {
    const component = renderer.create(<Nav />);
    const instance = component.root;
    const listItem = instance.findByProps({ className: 'white' });
    expect(listItem.children).toContain('most views');
  });

  it('should contain the microphone and gear icons', () => {
    const component = renderer.create(<Nav />);
    const instance = component.root;
    const icons = instance.findAllByProps({ className: 'fa-icon' });
    expect(icons).toHaveLength(2);
  });
});
