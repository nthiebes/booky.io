import { Scrolling } from './Scrolling';

describe('scrolling', function() {

    const windowMock = {
            'addEventListener': jest.fn(),
            'removeEventListener': jest.fn(),
            'pageYOffset': 0
        },
        documentMock = {
            'documentElement': {
                'scrollTop': 0
            }
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

    describe('addAction()', function() {

        it('should add a new action', function() {
            instance.addAction('banana', {'banana': true});

            expect(instance.actions).toEqual({
                'banana': {'banana': true}
            });
        });

        describe('for the first action', function() {

            it('should register a scroll event', function() {
                const callsLength = 1;

                instance.addAction('potato', {'banana': true});
                instance.addAction('apple', {'banana': true});
                expect(windowMock.addEventListener).toHaveBeenCalledWith('scroll', instance.onPageScroll);
                expect(windowMock.addEventListener.mock.calls.length).toBe(callsLength);
            });
        });
    });

    describe('removeAction()', function() {

        it('should remove an action', function() {
            instance.addAction('potato', {'banana': true});
            instance.removeAction('potato');

            expect(instance.actions).toEqual({});
        });

        describe('for the last action', function() {

            it('should remove the event listener', function() {
                instance.addAction('potato', {'banana': true});
                instance.addAction('apple', {'banana': true});
                instance.removeAction('potato');

                expect(windowMock.removeEventListener).not.toHaveBeenCalled();

                instance.removeAction('apple');
                
                expect(windowMock.removeEventListener).toHaveBeenCalledWith('scroll', instance.onPageScroll);
            });
        });
    });

    describe('when scrolling', function() {

        let isAboveMock,
            isBelowMock,
            scroll = function(offset, usePageYOffset) {
                if (usePageYOffset) {
                    windowMock.pageYOffset = offset;
                } else {
                    documentMock.documentElement.scrollTop = offset;
                }
                windowMock.addEventListener.mock.calls[0][1]();
            };

        beforeEach(function() {
            isAboveMock = jest.fn();
            isBelowMock = jest.fn();

            instance.addAction('potato', {
                'offset': 10,
                'isAbove': isAboveMock,
                'isBelow': isBelowMock
            });
        });

        describe('and still before the offset', function() {
            
            it('should not fire the callbacks', function() {
                scroll(5);

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
