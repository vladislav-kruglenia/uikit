import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function DesktopIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('desktop-icon', className)} viewBox="0 0 48 48" {...props}>
      <path
        d="M8.75 8C6.12665 8 4 10.1266 4 12.75V31.25C4 33.8734 6.12665 36 8.75 36H39.25C41.8734 36 44 33.8734 44 31.25V12.75C44 10.1266 41.8734 8 39.25 8H8.75ZM6.5 12.75C6.5 11.5074 7.50736 10.5 8.75 10.5H39.25C40.4926 10.5 41.5 11.5074 41.5 12.75V31.25C41.5 32.4926 40.4926 33.5 39.25 33.5H8.75C7.50736 33.5 6.5 32.4926 6.5 31.25V12.75Z"
        fill="currentColor"
      />
      <path
        d="M11.25 39.5C10.5596 39.5 10 40.0596 10 40.75C10 41.4404 10.5596 42 11.25 42H36.75C37.4404 42 38 41.4404 38 40.75C38 40.0596 37.4404 39.5 36.75 39.5H11.25Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
