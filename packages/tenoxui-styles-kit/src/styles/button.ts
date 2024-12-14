export const button = (className: string) => ({
  // base
  [`${className}`]:
    '[border,outline]-none h-40px d-inline-flex flex-parent-center px-12px [cursor]-pointer bg-neutral-900 hover:bg-neutral-800 tr-time-300ms text-slate-50 br-8px fs-0.875rem fw-500 ls--0.015em',
  // sizes
  [`${className}-sm`]: 'h-35px br-6px',
  [`${className}-lg`]: 'h-45px br-8px fs-1rem',
  [`${className}-icon`]: 'box-40px p-0',
  // variants
  [`${className}-outline`]:
    'bgc-transparent hover:bg-neutral-100 bdr-c-neutral-100 bw-1px bs-solid text-neutral-950',
  [`${className}-ghost`]: 'bgc-transparent hover:bg-neutral-100 text-neutral-950',
  [`${className}-line`]:
    'bg-opacity-0 hover:[text-decoration-line]-underline [text-underline-offset]-4px text-neutral-950',
  // simple colors
  [`${className}-primary`]: 'bg-green-500 hover:bg-green-300 text-neutral-950'
})
