export const flexbox = (className: string) => ({
  [`${className}`]: 'd-flex',
  [`${className}-row`]: 'flex-d-row',
  [`${className}-col`]: 'flex-d-column',
  [`${className}-center`]: 'flex-parent-center',
  [`${className}-start`]: 'flex-parent-flex-start',
  [`${className}-end`]: 'flex-parent-flex-end',
  'items-center': 'ai-center',
  'items-start': 'ai-flex-start',
  'items-end': 'ai-flex-end',
  'items-full': 'ai-stretch',
  'space-around': 'jc-space-around',
  'space-between': 'jc-space-between',
  'space-evenly': 'jc-space-evenly'
})
