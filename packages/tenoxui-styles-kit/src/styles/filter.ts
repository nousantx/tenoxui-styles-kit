export const filter = (className: string) => ({
  [`[class^='blur-'],[class^='brightness-'],[class^='contrast-'],[class^='grayscale-'],[class^='hue-rotate-'],[class^='invert-'],[class^='opacity-'],[class^='saturate-'],[class^='sepia-'],[class^='drop-shadow-']`]:
    'use-filter' // use @tenoxui/property/full filter property
})
