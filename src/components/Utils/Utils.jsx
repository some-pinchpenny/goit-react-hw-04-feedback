import { ImNeutral2, ImSmile2, ImAngry2 } from 'react-icons/im';

export const BtnIcon = variant => {
  switch (variant) {
    case 'neutral':
      return <ImNeutral2 size="96px" />;
    case 'good':
      return <ImSmile2 size="96px" />;
    case 'bad':
      return <ImAngry2 size="96px" />;
    default:
      throw new Error(`Unknown label ${variant}`);
  }
};
