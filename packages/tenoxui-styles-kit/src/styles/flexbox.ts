export const flexbox = (className: string) => ({
  [`${className}-row`]: 'flex-d-row',
  [`${className}-col`]: 'flex-d-column',
  [`${className}-center`]: 'flex-parent-center',
  [`${className}-start`]: 'flex-parent-flex-start',
  [`${className}-end`]: 'flex-parent-flex-end',
  [`${className}-wrap`]: 'flex-w-wrap',
  [`${className}-nowrap`]: 'flex-w-nowrap',
  [`${className}-grow`]: 'flex-g-1',
  'items-center': 'ai-center',
  'items-start': 'ai-flex-start',
  'items-baseline': 'ai-baseline',
  'items-end': 'ai-flex-end',
  'items-full': 'ai-stretch',
  'space-around': 'jc-space-around',
  'space-between': 'jc-space-between',
  'space-evenly': 'jc-space-evenly'
})
