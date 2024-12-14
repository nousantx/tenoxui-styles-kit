/**
 * This Grid System is 'stealed' from Tailwind CSS (https://tailwindcss.com/docs/grid-template-columns and its further)
 */

import type { CoreConfig } from '@tenoxui/core/full'

export const gridSystem: CoreConfig = {
  property: {
    'grid-cols': {
      property: 'gridTemplateColumns',
      value: 'repeat({0}, minmax(0, 1fr))'
    },
    'grid-rows': {
      property: 'gridTemplateRows',
      value: 'repeat({0}, minmax(0, 1fr))'
    },
    'col-start': 'gridColumnStart',
    'col-end': 'gridColumnEnd',
    'row-start': 'gridRowStart',
    'row-end': 'gridRowEnd',
    'col-span': {
      property: 'gridColumn',
      value: 'span {0} / span {0}'
    },
    'row-span': {
      property: 'gridRow',
      value: 'span {0} / span {0}'
    }
  },
  aliases: {
    'grid-column': '[gridTemplateColumns]-none',
    'grid-cols-none': '[gridTemplateColumns]-none',
    'grid-cols-subgrid': '[gridTemplateRoes]-subgrid',
    'grid-rows-none': '[gridTemplateColumns]-none',
    'grid-rows-subgrid': '[gridTemplateRows]-subgrid',
    'col-span-full': '[gridColumn]-[1_/_-1]]'
  }
}
