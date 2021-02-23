export interface IButton {
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isLoading?: boolean;
  title: string;
  url?: string;
  icon?: JSX.Element;
  ghost?: boolean;
  grey?: boolean;
  full?: boolean;
  center?: boolean;
  isSubmit?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  iconPosition?: 'left' | 'right' | undefined;
}
