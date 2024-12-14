export const radius = (className: string) => {
  const directions = ['', 't', 'b', 'l', 'r', 'tl', 'tr', 'bl', 'br']
  const sizes = {
    '': '0.25rem',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '999rem',
    none: '0px'
  }

  const classes: Record<string, string> = {}

  directions.forEach((direction) => {
    Object.entries(sizes).forEach(([size, value]) => {
      const key = direction
        ? `${className}-${direction}${size ? `-${size}` : ''}`
        : `${className}${size ? `-${size}` : ''}`
      const valueClass = direction ? `br-${direction}-${value}` : `br-${value}`
      classes[key] = valueClass
    })
  })

  return classes
}
