import React, { ReactNode } from 'react';

type VisualizeDataProps = {
  actionsTop?: ReactNode;
  content?: ReactNode;
  actionBottom?: ReactNode;
}

const VisualizeData = ({ actionsTop, content, actionBottom }:VisualizeDataProps) => (
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

export default VisualizeData;
