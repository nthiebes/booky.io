import { Scrolling } from './scrolling';

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
                instance.addAction('potato', {'banana': true});
                instance.addAction('apple', {'banana': true});
                expect(windowMock.addEventListener).toHaveBeenCalledWith('scroll', instance.onPageScroll);
                expect(windowMock.addEventListener.mock.calls.length).toBe(1);
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
});
