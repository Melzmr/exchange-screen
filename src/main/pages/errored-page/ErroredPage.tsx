import React from 'react';

export const ErroredPage: React.FC = ({children}) => (
    <div className="page_container">
      <div className="page_content">
        {children}
      </div>
    </div>
);

ErroredPage.displayName = 'ErroredPage';
