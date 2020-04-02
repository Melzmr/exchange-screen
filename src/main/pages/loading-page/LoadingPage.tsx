import React from 'react';

export const LoadingPage: React.FC = ({children}) => (
    <div className="page_container">
      <div className="page_content">
        {children}
      </div>
    </div>
);

LoadingPage.displayName = 'LoadingPage';
