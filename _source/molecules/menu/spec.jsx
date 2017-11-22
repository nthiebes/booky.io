import React from 'react';
import { shallow, mount } from 'enzyme';

import Menu from './Menu';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';

xdescribe('<Menu />', function() {

  let component,
    documentMock;
    
  const getComponent = function(props = {}) {
    return <Menu { ...props } />;
  };

  beforeEach(function() {
    documentMock = {
      'body': {
        'classList': {
          'toggle': jest.fn()
        }
      }
    };
  });

  describe('when initialized without optional parameters and open', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'menuMainOpen': true,
        'document': documentMock
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('ul').hasClass('m-menu-main m-menu-main--open ')).toBe(true);
    });

    it('should prevent the event propagation on click', function() {
      const eventMock = {
        'stopPropagation': jest.fn()
      };

      component.find('ul').props().onClick(eventMock);
      expect(eventMock.stopPropagation).toHaveBeenCalled();
    });

    xit('should update the body class', function() {
      component = mount(getComponent({
        'menuMainOpen': true,
        'document': documentMock
      }));

      component.update();
      expect(documentMock.body.classList.toggle).toHaveBeenCalledWith('booky--no-scrolling-mobile-tablet', true);
    });

    it('should include the menu items', function() {
      expect(component.contains(
        <Link className="m-menu-main__item" href="/help">
          <Icon icon="help" label="Help" />
        </Link>,
        <Link className="m-menu-main__item" href="/account">
          <Icon icon="account" label="Account" />
        </Link>,
        <Link className="m-menu-main__item" href="/next">
          <Icon icon="next" label="Next" />
        </Link>,
        <Link className="m-menu-main__item m-menu-main__sign-out" href="/sign-out">
          <Icon icon="sign-out" label="Sign Out" />
        </Link>
      )).toBe(true);
    });
  });

  describe('when initialized with optional parameters and closed', function() {

    beforeEach(function() {
      component = shallow(getComponent({
        'menuMainOpen': false,
        'document': documentMock,
        'className': 'banana'
      }));
    });

    it('should have the correct class', function() {
      expect(component.find('ul').hasClass('m-menu-main banana')).toBe(true);
    });
  });
});
