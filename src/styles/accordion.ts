export const accordion = (className: string) => ({
  [`.${className}`]: 'hello',
  [`.${className}.${className}-sm`]: 'its small'
})
