import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CollapseSquareIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('collapse-square-icon', className)} viewBox="0 0 20 20" {...props}>
      <path
        d="M16 5.26758V13C16 14.6569 14.6569 16 13 16H5.26756C5.61337 16.5978 6.25972 17 7 17H13C15.2091 17 17 15.2091 17 13V7.00001C17 6.25973 16.5978 5.61339 16 5.26758ZM11.5 9.49999C11.7761 9.49999 12 9.27614 12 9C12 8.72385 11.7761 8.5 11.5 8.5L6.5 8.5C6.22386 8.5 6 8.72385 6 8.99999C6 9.27614 6.22386 9.49999 6.5 9.49999L11.5 9.49999ZM13 3C14.1046 3 15 3.89543 15 5V13C15 14.1046 14.1046 15 13 15H5C3.89543 15 3 14.1046 3 13L3 5C3 3.89543 3.89543 3 5 3L13 3ZM14 5C14 4.44771 13.5523 4 13 4L5 4C4.44772 4 4 4.44771 4 5L4 13C4 13.5523 4.44771 14 5 14H13C13.5523 14 14 13.5523 14 13V5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
