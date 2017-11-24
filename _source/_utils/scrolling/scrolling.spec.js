import { Scrolling } from './scrolling';

xdescribe('scrolling', function() {

  const windowMock = {
      'addEventListener': jest.fn(),
      'removeEventListener': jest.fn(),
      'pageYOffset': 0
    },
    documentMock = {
      'documentElement': {
        'scrollTop': 0
      }
    },
    scroll = function(offset, useScrollTop) {
      const firstCall = 0,
        secondArgument = 1;

      if (useScrollTop) {
        documentMock.documentElement.scrollTop = offset;
        windowMock.pageYOffset = null;
      } else {
        windowMock.pageYOffset = offset;
        documentMock.documentElement.scrollTop = null;
      }
      windowMock.addEventListener.mock.calls[firstCall][secondArgument]();
    };

  let instance;

  beforeEach(function() {
    instance = new Scrolling({
      'window': windowMock,
      'document': documentMock
    });
  });

  afterEach(function() {
    windowMock.addEventListener.mockClear();
    windowMock.removeEventListener.mockClear();
  });

  describe('registerAction()', function() {

    it('should add a new action', function() {
      instance.registerAction('banana', {'banana': true});

      expect(instance.actions).toEqual({
        'banana': {'banana': true}
      });
    });

    describe('for the first action', function() {

      it('should register a scroll event', function() {
        const callsLength = 1;

        instance.registerAction('potato', {'banana': true});
        instance.registerAction('apple', {'banana': true});
        expect(windowMock.addEventListener).toHaveBeenCalledWith('scroll', instance.onPageScroll);
        expect(windowMock.addEventListener.mock.calls.length).toBe(callsLength);
      });
    });
  });

  describe('removeAction()', function() {

    it('should remove an action', function() {
      instance.registerAction('potato', {'banana': true});
      instance.removeAction('potato');

      expect(instance.actions).toEqual({});
    });

    describe('for the last action', function() {

      it('should remove the event listener', function() {
        instance.registerAction('potato', {'banana': true});
        instance.registerAction('apple', {'banana': true});
        instance.removeAction('potato');

        expect(windowMock.removeEventListener).not.toHaveBeenCalled();

        instance.removeAction('apple');
        
        expect(windowMock.removeEventListener).toHaveBeenCalledWith('scroll', instance.onPageScroll);
      });
    });
  });

  describe('updateStatus()', function() {

    let isAboveMock,
      isBelowMock,
      undefinedVariable;

    beforeEach(function() {
      isAboveMock = jest.fn();
      isBelowMock = jest.fn();
    });

    describe('when scroll position is before the offset', function() {

      it('should fire the callback', function() {
        instance.registerAction('potato', {
          'offset': 10,
          'isAbove': isAboveMock,
          'isBelow': isBelowMock
        });

        windowMock.pageYOffset = undefinedVariable;

        instance.updateStatus('potato');

        expect(isAboveMock).toHaveBeenCalled();
      });
    });

    describe('when scroll position is after the offset', function() {
      
      it('should fire the callback', function() {
        instance.registerAction('potato', {
          'offset': 10,
          'isAbove': isAboveMock,
          'isBelow': isBelowMock
        });

        windowMock.pageYOffset = 15;

        instance.updateStatus('potato');

        expect(isBelowMock).toHaveBeenCalled();
      });
    });
  });

  describe('when scrolling', function() {

    let isAboveMock,
      isBelowMock;

    beforeEach(function() {
      isAboveMock = jest.fn();
      isBelowMock = jest.fn();

      instance.registerAction('potato', {
        'offset': 10,
        'isAbove': isAboveMock,
        'isBelow': isBelowMock
      });
    });

    describe('and still before the offset', function() {
      
      it('should not fire the callbacks', function() {
        scroll(5, true); // 'true' to also test 'document.documentElement.scrollTop'

        expect(isAboveMock).not.toHaveBeenCalled();
        expect(isBelowMock).not.toHaveBeenCalled();
      }); 
    });

    describe('and after the offset', function() {
      
      it('should fire the isBelow callback once', function() {
        scroll(15);

        expect(isBelowMock.mock.calls.length).toBe(1);
        expect(isBelowMock).toHaveBeenCalled();
      }); 
    });

    describe('from after to before the offset', function() {
      
      it('should fire the isAbove callback once', function() {
        scroll(15);
        scroll(5);

        expect(isAboveMock.mock.calls.length).toBe(1);
        expect(isAboveMock).toHaveBeenCalled();
      }); 
    });
  });
});
