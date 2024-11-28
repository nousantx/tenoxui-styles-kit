export const transform = (className: string) => ({
  [`[class^='translate-'],[class^='rotate-'],[class^='scale-'],[class^='skew-']`]: 'use-transform' // use @tenoxui/property/full transform property
})
