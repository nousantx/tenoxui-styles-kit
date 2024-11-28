export const border = (className: string) => {
  const directions = ['', 'x', 'y', 't', 'b', 'l', 'r']
  const sizes = ['none', '1', '2', '4', '6', '8']

  const classes: Record<string, string> = {}

  classes[`[class^='${className}']`] = 'bs-solid [border-color,--tui-border-color]-currentColor'

  directions.forEach((direction) => {
    sizes.forEach((size) => {
      const key = direction
        ? `.${className}-${direction}${size === 'none' ? '-none' : `-${size}`}`
        : `.${className}${size === 'none' ? '-none' : `-${size}`}`
      const value = `bw${direction ? `-${direction}` : ''}-${size === 'none' ? '0px' : `${size}px`}`
      classes[key] = value
    })
  })

  return classes
}
