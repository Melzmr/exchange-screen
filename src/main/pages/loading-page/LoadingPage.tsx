import React from 'react';

export const LoadingPage: React.FC = ({children}) => (
    <div className="page_container">
      {children}
    </div>
);

LoadingPage.displayName = 'LoadingPage';
