export const ExampleStyle = (className: string) => ({
  // the `className` will be the prefix of the style component (e.g. `btn`, `ac`, and so on)
  // selector: styles
  [`.${className}`]: 'bg-red-500',
  [`.${className}.${className}-variant`]: 'w-mx-200px'
})
