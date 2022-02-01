import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CaretRightIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('caret-right-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M11.0731 18.839C10.2649 19.5462 9 18.9722 9 17.8983L9 6.10204C9 5.02809 10.2649 4.45412 11.0731 5.16132L17.3838 10.6831C18.1806 11.3804 18.1806 12.6199 17.3838 13.3172L11.0731 18.839ZM10.5 17.3473L16.396 12.1883C16.5099 12.0887 16.5099 11.9116 16.396 11.812L10.5 6.65298L10.5 17.3473Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
