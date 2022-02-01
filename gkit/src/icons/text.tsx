import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function TextIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('text-icon', className)} viewBox="0 0 48 48" {...props}>
      <path
        d="M10 9.25C10 8.55964 10.5596 8 11.25 8H36.75C37.4404 8 38 8.55964 38 9.25V14C38 14.6904 37.4404 15.25 36.75 15.25C36.0596 15.25 35.5 14.6904 35.5 14V10.5H25.25V37.5H28.75C29.4404 37.5 30 38.0596 30 38.75C30 39.4404 29.4404 40 28.75 40H19.25C18.5596 40 18 39.4404 18 38.75C18 38.0596 18.5596 37.5 19.25 37.5H22.75V10.5H12.5V14C12.5 14.6904 11.9404 15.25 11.25 15.25C10.5596 15.25 10 14.6904 10 14V9.25Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
