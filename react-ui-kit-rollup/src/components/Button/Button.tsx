import block from 'bem-cn';
import React, {CSSProperties, FC} from 'react';
import './styles.scss';

type ButtonType = 'default' | 'primary' | 'secondary' | 'link' | 'icon';

export interface Props {
  className?: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  htmlType?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const b = block('button');

const Button: FC<Props> = ({
  className = '',
  style,
  onClick = () => {},
  type = 'default',
  htmlType,
  disabled = false,
  startIcon,
  endIcon,
  children,
  ...props
}) => (
  <button
    className={`${b({ [type]: true })} ${className}`.trim()}
    onClick={onClick}
    disabled={disabled}
    style={style}
    type={htmlType}
    {...props}
  >
    {startIcon && <div className={b('icon')}>{startIcon}</div>}
    <span>{children}</span>
    {endIcon && <div className={b('icon', { end: true })}>{endIcon}</div>}
  </button>
);

export default Button;
