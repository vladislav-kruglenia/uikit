import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function ArrowUpIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('arrow-up-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M4.20889 10.7327C3.9232 11.0326 3.93475 11.5074 4.23467 11.7931C4.5346 12.0787 5.00933 12.0672 5.29502 11.7673L11.2495 5.516V20.25C11.2495 20.6642 11.5853 21 11.9995 21C12.4137 21 12.7495 20.6642 12.7495 20.25V5.51565L18.7043 11.7673C18.99 12.0672 19.4648 12.0787 19.7647 11.7931C20.0646 11.5074 20.0762 11.0326 19.7905 10.7327L12.7238 3.31379C12.5627 3.14474 12.3573 3.04477 12.1438 3.01386C12.0971 3.00477 12.0489 3 11.9995 3C11.9498 3 11.9012 3.00483 11.8543 3.01406C11.6412 3.04518 11.4363 3.14509 11.2756 3.31379L4.20889 10.7327Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
