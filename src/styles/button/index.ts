import { UITypes } from '../../types'

export const Button = (className: string): UITypes => ({
  template: `
    (.${className}): [all]-unset bg-opacity-1 h-35px px-12px br-8px d-flex flex-parent-center gap-6px tr-time-300ms fs-0.875rem lh-1 ls--0.015em fw-500 tw-nowrap bg-neutral-900 hover:bg-neutral-800 text-neutral-100;
   
    (.${className}.${className}-sm): h-30px br-6px;
    (.${className}.${className}-lg): h-40px px-16px;
    (.${className}.${className}-icon): h-35px w-35px px-0;
   
    (.${className}.${className}-outline): bgc-transparent hover:bg-neutral-200 bdr-c-neutral-100 bw-1px bs-solid text-neutral-950;
    (.${className}.${className}-ghost): bgc-transparent hover:bg-neutral-100 text-neutral-950;
    (.${className}.${className}-line): bg-opacity-0 hover:[text-decoration-line]-underline [text-underline-offset]-4px text-neutral-950;
   
    (.${className}.${className}-primary): bg-primary-500 hover:bg-primary-300 text-fc-neutral-950;
    (.${className}.${className}-danger): bg-red-500 hover:bg-red-300 text-fc-neutral-50;
    (.${className}.${className}-neutral): bg-blue-500 hover:bg-blue-300 text-fc-neutral-50;
    (.${className}.${className}-approve): bg-green-600 hover:bg-green-300 text-fc-neutral-950;
    (.${className}.${className}-warning): bg-yellow-600 hover:bg-yellow-300 text-fc-neutral-950;
  `,
  utility: {
    display: {
      [className]: 'flex'
    }
  },
  classes: {
    [className]: {
      display: 'flex',
      padding: '0 12px',
      height: '40px'
    },
    [`${className}-sm`]: {
      height: '35px'
    }
  }
})
