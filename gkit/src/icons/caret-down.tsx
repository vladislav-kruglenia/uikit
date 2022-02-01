import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CaretDownIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('caret-down-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M5.16132 10.0731C4.45412 9.2649 5.0281 8 6.10204 8H17.8983C18.9722 8 19.5462 9.2649 18.839 10.0731L13.3172 16.3838C12.6199 17.1806 11.3804 17.1806 10.6831 16.3838L5.16132 10.0731ZM6.65298 9.5L11.812 15.396C11.9116 15.5099 12.0887 15.5099 12.1883 15.396L17.3473 9.5H6.65298Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
