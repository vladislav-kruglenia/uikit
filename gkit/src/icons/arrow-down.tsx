import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function ArrowDownIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('arrow-down-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M19.7905 13.2673C20.0762 12.9674 20.0646 12.4926 19.7647 12.2069C19.4648 11.9213 18.99 11.9328 18.7043 12.2327L12.7498 18.484V3.75C12.7498 3.33579 12.4141 3 11.9998 3C11.5856 3 11.2498 3.33579 11.2498 3.75V18.4844L5.29502 12.2327C5.00933 11.9328 4.5346 11.9213 4.23467 12.2069C3.93475 12.4926 3.9232 12.9674 4.20889 13.2673L11.2756 20.6862C11.4366 20.8553 11.642 20.9552 11.8556 20.9861C11.9023 20.9952 11.9505 21 11.9998 21C12.0495 21 12.0981 20.9952 12.1451 20.9859C12.3582 20.9548 12.5631 20.8549 12.7238 20.6862L19.7905 13.2673Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
