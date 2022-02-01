import './style.less';
import classNames from 'classnames';
import React from 'react';

type Sizes = 'small' | 'normal' | 'large';

type Types = 'primary' | 'secondary' | 'danger';

type Props = React.PropsWithChildren<{
  size?: Sizes;
  type?: Types;
  disabled?: boolean;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  asIcon?: boolean;
  className?: string;
  onClick?: () => void;
}>;

export function Button({
  children,
  size = 'normal',
  hover,
  type = 'primary',
  disabled,
  active,
  focus,
  asIcon,
  className,
  onClick,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={classNames('gkit-btn', className, size, type, { hover, active, focus, icon: asIcon })}
      onClick={e => {
        e.preventDefault();
        onClick?.();
      }}
    >
      {children}
    </button>
  );
}
