export interface IButton {
  title: string;
  icon?: JSX.Element;
  ghost?: boolean;
  grey?: boolean;
  full?: boolean;
  center?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  iconPosition?: 'left' | 'right' | undefined;
}
