export const badge = (className: string) => ({
  // baee
  [`.${className}`]:
    'center h-28px fs-1rem px-10px br-999rem text-neutral-950 bg-neutral-100 ls--0.015em lh-1 fw-500',
  // sizes
  [`.${className}.${className}-xs`]: 'h-22px px-6px fs-0.75rem',
  [`.${className}.${className}-sm`]: 'h-25px px-8px fs-0.875rem',
  // variant example
  [`.${className}.${className}-danger`]: 'text-red-700 bg-red-100',
  [`.${className}.${className}-approve`]: 'text-blue-800 bg-blue-200',
  [`.${className}.${className}-success`]: 'text-green-700 bg-green-100'
})
