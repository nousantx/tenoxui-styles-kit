export const spaceBetween = (className: string) => ({
  [`[class^='${className}-x'] > * + *`]: 'ml-$tui-space-x',
  [`[class^='${className}-y'] > * + *`]: 'mt-$tui-space-y'
})
