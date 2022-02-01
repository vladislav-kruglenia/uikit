import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CaretUpIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('caret-up-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M5.16132 14.9083C4.45412 15.7165 5.0281 16.9814 6.10204 16.9814H17.8983C18.9722 16.9814 19.5462 15.7165 18.839 14.9083L13.3172 8.59765C12.6199 7.80083 11.3804 7.80083 10.6831 8.59765L5.16132 14.9083ZM6.65298 15.4814L11.812 9.58541C11.9116 9.47158 12.0887 9.47158 12.1883 9.58541L17.3473 15.4814H6.65298Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
