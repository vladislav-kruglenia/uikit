import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function MobileIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('mobile-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M15.75 2C16.9926 2 18 3.00736 18 4.25V19.75C18 20.9926 16.9926 22 15.75 22H8.25C7.00736 22 6 20.9926 6 19.75V4.25C6 3.00736 7.00736 2 8.25 2H15.75ZM15.75 3.5H8.25C7.83579 3.5 7.5 3.83579 7.5 4.25V19.75C7.5 20.1642 7.83579 20.5 8.25 20.5H15.75C16.1642 20.5 16.5 20.1642 16.5 19.75V4.25C16.5 3.83579 16.1642 3.5 15.75 3.5ZM13.2489 17.5C13.6631 17.4994 13.9994 17.8347 14 18.2489C14.0006 18.6631 13.6653 18.9994 13.2511 19L10.7511 19.0038C10.3369 19.0044 10.0006 18.6691 10 18.2549C9.99938 17.8407 10.3347 17.5044 10.7489 17.5038L13.2489 17.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
