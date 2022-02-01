import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function FolderAddIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('folder-add-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M17.5 11C20.5376 11 23 13.4624 23 16.5C23 19.5376 20.5376 22 17.5 22C14.4624 22 12 19.5376 12 16.5C12 13.4624 14.4624 11 17.5 11ZM17.5 12.9992L17.4101 13.0073C17.206 13.0443 17.0451 13.2053 17.0081 13.4094L17 13.4992L16.9996 15.9992L14.4977 16L14.4078 16.0081C14.2037 16.0451 14.0427 16.206 14.0057 16.4101L13.9977 16.5L14.0057 16.5899C14.0427 16.794 14.2037 16.9549 14.4078 16.9919L14.4977 17L17.0007 16.9992L17.0011 19.5035L17.0092 19.5934C17.0462 19.7975 17.2071 19.9584 17.4112 19.9954L17.5011 20.0035L17.591 19.9954C17.7951 19.9584 17.956 19.7975 17.9931 19.5934L18.0011 19.5035L18.0007 16.9992L20.5046 17L20.5944 16.9919C20.7985 16.9549 20.9595 16.794 20.9965 16.5899L21.0046 16.5L20.9965 16.4101C20.9595 16.206 20.7985 16.0451 20.5944 16.0081L20.5046 16L17.9996 15.9992L18 13.4992L17.9919 13.4094C17.9549 13.2053 17.794 13.0443 17.5899 13.0073L17.5 12.9992ZM8.20693 4C8.66749 4 9.1153 4.14129 9.49094 4.40235L9.64734 4.5215L12.022 6.5H19.75C20.8867 6.5 21.8266 7.34297 21.9785 8.43788L21.9948 8.59595L22 8.75L22.0008 11.8104C21.5566 11.384 21.052 11.02 20.5011 10.7328L20.5 8.75C20.5 8.3703 20.2178 8.05651 19.8518 8.00685L19.75 8H12.021L9.64734 9.9785C9.29353 10.2733 8.85906 10.4515 8.40335 10.4914L8.20693 10.5L3.5 10.499V17.75C3.5 18.1297 3.78215 18.4435 4.14823 18.4932L4.25 18.5L11.3136 18.5004C11.4861 19.0342 11.7258 19.5378 12.0226 20.0012L4.25 20C3.05914 20 2.08436 19.0748 2.00519 17.904L2 17.75V6.25C2 5.05914 2.92516 4.08436 4.09595 4.00519L4.25 4H8.20693ZM8.20693 5.5H4.25C3.8703 5.5 3.55651 5.78215 3.50685 6.14823L3.5 6.25V8.999L8.20693 9C8.34729 9 8.4841 8.96063 8.60221 8.88738L8.68706 8.82617L10.578 7.249L8.68706 5.67383C8.57923 5.58398 8.44893 5.52664 8.31129 5.5073L8.20693 5.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
