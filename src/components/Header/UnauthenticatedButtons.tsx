import React from 'react';
import SignIn from '../../auth/SignIn';

const UnauthenticatedButtons: React.FC = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default UnauthenticatedButtons;
