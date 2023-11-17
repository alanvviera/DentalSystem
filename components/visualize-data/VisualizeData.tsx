import React, { ReactNode } from 'react';

interface VisualizeDataProps {
  actionsTop?: ReactNode;
  content?: ReactNode;
  actionBottom?: ReactNode;
}

const VisualizeData: React.FC<VisualizeDataProps> = ({ actionsTop, content, actionBottom }) => {
  return (
    <div className='min-h-screen min-w-full'>
      {actionsTop && (
        <div className='flex flex-row justify-end mb-2'>
          {actionsTop}
        </div>
      )}
      {content && content}
      {actionBottom && actionBottom}
    </div>
  );
};

export default VisualizeData;
