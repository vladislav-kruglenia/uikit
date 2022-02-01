import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function FolderOpenedIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('folder-opened-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M20.0005 9.50198V8.74988C20.0005 7.50724 18.9931 6.49988 17.7505 6.49988H12.0252L9.64417 4.51998C9.24008 4.18396 8.73112 4 8.20558 4H4.25006C3.00772 4 2.00049 5.00689 2.00006 6.24922L1.99609 17.7492C1.99567 18.9922 3.00315 20 4.24609 20H4.27245C4.27656 20 4.28068 20 4.2848 20H18.4698C19.2728 20 19.9727 19.4536 20.1675 18.6746L21.9174 11.6765C22.1936 10.572 21.3582 9.50198 20.2197 9.50198H20.0005ZM4.25006 5.5H8.20558C8.38076 5.5 8.55041 5.56132 8.68511 5.67333L11.2745 7.82655C11.4092 7.93855 11.5789 7.99988 11.7541 7.99988H17.7505C18.1647 7.99988 18.5005 8.33566 18.5005 8.74988V9.50198H6.42434C5.39184 9.50198 4.49186 10.2047 4.24149 11.2064L3.49732 14.1837L3.50006 6.24974C3.5002 5.83563 3.83595 5.5 4.25006 5.5ZM5.69672 11.5701C5.78018 11.2362 6.08017 11.002 6.42434 11.002H20.2197C20.3823 11.002 20.5017 11.1548 20.4622 11.3126L18.7123 18.3107C18.6845 18.422 18.5845 18.5 18.4698 18.5H4.2848C4.12216 18.5 4.00282 18.3472 4.04226 18.1894L5.69672 11.5701Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
