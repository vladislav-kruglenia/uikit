import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function AudioIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('audio-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M20 2.75001C20 2.51293 19.8879 2.28981 19.6977 2.14829C19.5075 2.00677 19.2616 1.96351 19.0345 2.03164L9.03449 5.03164C8.71725 5.12681 8.5 5.4188 8.5 5.75001V15.6273C7.93308 15.2319 7.24362 15 6.5 15C4.567 15 3 16.567 3 18.5C3 20.433 4.567 22 6.5 22C8.433 22 10 20.433 10 18.5C10 18.4426 9.99862 18.3856 9.99589 18.3289C9.99861 18.303 10 18.2766 10 18.25V10.308L18.5 7.75803V13.6273C17.9331 13.2319 17.2436 13 16.5 13C14.567 13 13 14.567 13 16.5C13 18.433 14.567 20 16.5 20C18.433 20 20 18.433 20 16.5C20 16.4427 19.9986 16.3856 19.9959 16.329C19.9986 16.303 20 16.2767 20 16.25V2.75001Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
