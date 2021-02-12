/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  ButtonLargePrimary,
  ButtonLargeLight,
  ButtonLargeDark,
  ButtonLargeBlue,
  ButtonLargeGreen,
  ButtonSmallPrimary,
  ButtonSmallLight,
  ButtonSmallMedium,
  ButtonSmallDark
} from './index';

function getButton(Component, props = {}) {
  return (
    <Component icon="heart" {...props}>
      {'I '} <b>{'love'}</b>
      {' Sami'}
    </Component>
  );
}

storiesOf('Button')
  .addWithChapters('Large', {
    chapters: [
      {
        title: 'Primary',
        sections: [
          {
            title: 'Regular',
            sectionFn: () => getButton(ButtonLargePrimary)
          },
          {
            title: 'Disabled',
            sectionFn: () => getButton(ButtonLargePrimary, { disabled: true })
          }
        ]
      },
      {
        title: 'Green',
        sections: [
          {
            sectionFn: () => getButton(ButtonLargeGreen)
          },
          {
            title: 'Disabled',
            sectionFn: () => getButton(ButtonLargeGreen, { disabled: true })
          }
        ]
      },
      {
        title: 'Blue',
        sections: [
          {
            sectionFn: () => getButton(ButtonLargeBlue)
          },
          {
            title: 'Disabled',
            sectionFn: () => getButton(ButtonLargeBlue, { disabled: true })
          }
        ]
      },
      {
        title: 'Light',
        sections: [
          {
            sectionFn: () => getButton(ButtonLargeLight)
          },
          {
            title: 'Disabled',
            sectionFn: () => getButton(ButtonLargeLight, { disabled: true })
          }
        ]
      },
      {
        title: 'Dark',
        sections: [
          {
            sectionFn: () => getButton(ButtonLargeDark)
          },
          {
            title: 'Disabled',
            sectionFn: () => getButton(ButtonLargeDark, { disabled: true })
          }
        ]
      }
    ]
  })
  .addWithChapters('Small', {
    chapters: [
      {
        title: 'Primary',
        sections: [
          {
            title: 'Regular',
            sectionFn: () => getButton(ButtonSmallPrimary, { icon: null })
          },
          {
            title: 'Regular With icon',
            sectionFn: () => (
              <ButtonSmallPrimary icon="heart">
                {'Button text'}
              </ButtonSmallPrimary>
            )
          },
          {
            title: 'Disabled',
            sectionFn: () => (
              <ButtonSmallPrimary disabled>{'Button text'}</ButtonSmallPrimary>
            )
          },
          {
            title: 'Disabled with icon',
            sectionFn: () => (
              <ButtonSmallPrimary icon="heart" disabled>
                {'Button text'}
              </ButtonSmallPrimary>
            )
          }
        ]
      },
      {
        title: 'Light',
        sections: [
          {
            title: 'Regular',
            sectionFn: () => getButton(ButtonSmallLight)
          },
          {
            title: 'Regular With icon',
            sectionFn: () => (
              <ButtonSmallLight icon="heart">{'Button text'}</ButtonSmallLight>
            )
          },
          {
            title: 'Disabled',
            sectionFn: () => (
              <ButtonSmallLight disabled>{'Button text'}</ButtonSmallLight>
            )
          },
          {
            title: 'Disabled with icon',
            sectionFn: () => (
              <ButtonSmallLight icon="heart" disabled>
                {'Button text'}
              </ButtonSmallLight>
            )
          }
        ]
      },
      {
        title: 'Medium',
        sections: [
          {
            title: 'Regular',
            sectionFn: () => getButton(ButtonSmallMedium)
          },
          {
            title: 'Regular With icon',
            sectionFn: () => (
              <ButtonSmallMedium icon="heart">
                {'Button text'}
              </ButtonSmallMedium>
            )
          },
          {
            title: 'Disabled',
            sectionFn: () => (
              <ButtonSmallMedium disabled>{'Button text'}</ButtonSmallMedium>
            )
          },
          {
            title: 'Disabled with icon',
            sectionFn: () => (
              <ButtonSmallMedium icon="heart" disabled>
                {'Button text'}
              </ButtonSmallMedium>
            )
          }
        ]
      },
      {
        title: 'Dark',
        sections: [
          {
            title: 'Regular',
            sectionFn: () => getButton(ButtonSmallDark)
          },
          {
            title: 'Regular With icon',
            sectionFn: () => (
              <ButtonSmallDark icon="heart">{'Button text'}</ButtonSmallDark>
            )
          },
          {
            title: 'Disabled',
            sectionFn: () => (
              <ButtonSmallDark disabled>{'Button text'}</ButtonSmallDark>
            )
          },
          {
            title: 'Disabled with icon',
            sectionFn: () => (
              <ButtonSmallDark icon="heart" disabled>
                {'Button text'}
              </ButtonSmallDark>
            )
          }
        ]
      }
    ]
  });
