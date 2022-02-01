import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function DocumentTextIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('document-text-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M12 8V2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V10H14C12.8954 10 12 9.10457 12 8ZM8.25 11.5H15.75C16.1642 11.5 16.5 11.8358 16.5 12.25C16.5 12.6642 16.1642 13 15.75 13H8.25C7.83579 13 7.5 12.6642 7.5 12.25C7.5 11.8358 7.83579 11.5 8.25 11.5ZM8.25 14.25H15.75C16.1642 14.25 16.5 14.5858 16.5 15C16.5 15.4142 16.1642 15.75 15.75 15.75H8.25C7.83579 15.75 7.5 15.4142 7.5 15C7.5 14.5858 7.83579 14.25 8.25 14.25ZM8.25 17H15.75C16.1642 17 16.5 17.3358 16.5 17.75C16.5 18.1642 16.1642 18.5 15.75 18.5H8.25C7.83579 18.5 7.5 18.1642 7.5 17.75C7.5 17.3358 7.83579 17 8.25 17ZM13.5 8V2.5L19.5 8.5H14C13.7239 8.5 13.5 8.27614 13.5 8Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
