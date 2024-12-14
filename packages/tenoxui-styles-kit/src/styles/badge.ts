export const badge = (className: string) => ({
  // base
  [`${className}`]:
    'd-flex flex-parent-center h-26px px-8px fs-0.875rem br-4px text-neutral-950 bg-neutral-100 ls--0.015em lh-1 fw-500 bg-opacity-0.3',
  // sizes
  [`${className}-sm`]: 'h-22px px-6px fs-0.75rem',
  [`${className}-lg`]: 'h-28px px-10px fs-1rem',
  [`${className}-round`]: 'br-999rem px-12px',
  // variant example
  [`${className}-danger`]: '[text,bdr-c]-red-600 bg-red-400',
  [`${className}-approve`]: '[text,bdr-c]-blue-800 bg-blue-200',
  [`${className}-success`]: '[text,bdr-c]-green-500 bg-green-300',
  [`${className}-border`]: 'bw-1px bs-solid [--bdr-c-opacity]-0.3'
})
