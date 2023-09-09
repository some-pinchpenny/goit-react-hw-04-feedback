import { ContainerTitle } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div>
      <ContainerTitle>{title}</ContainerTitle>
      {children}
    </div>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
};
