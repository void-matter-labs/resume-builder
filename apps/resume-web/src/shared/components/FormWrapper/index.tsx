import React from 'react'

export default function FormWrapper({ children, ...props }: React.ComponentProps<'form'>) {
  return (
    <form
      {...props}
      className={[
        'relative',
        'pt-5',
        'flex',
        'flex-col',
        'px-6',
        'gap-4',
        'shrink-0',
        'left-[4rem]',
        'w-[calc(100vw-4rem)]',
        props.className ?? ''
      ].join(' ')}
    >
      {children}
    </form>
  )
}

