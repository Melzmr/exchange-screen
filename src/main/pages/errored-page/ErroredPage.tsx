import React from 'react';

export const ErroredPage: React.FC = ({children}) => (
    <div className="page_container">
      {children}
    </div>
);

ErroredPage.displayName = 'ErroredPage';
