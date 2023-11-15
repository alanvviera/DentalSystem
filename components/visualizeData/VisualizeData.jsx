import React from 'react'
import { LabelDataText } from './labelsData/LabelDataText'
import { Button, Space, Title } from '@mantine/core'
import { DeleteFilled, DeleteOutlined, EditFilled } from '@ant-design/icons'

// px-4 py-2 m-2
const VisualizeData = ({ actionsTop,content,actionBottom }) => {
  return (
    <div className='flex flex-row w-full justify-center content-center items-center'>
      <div className='flex flex-col bg-tertiary min-h-screen min-w-full md:min-h-min md:min-w-min md:rounded-lg bg-gradient-to-b from-cyan-100 via-sky-200 to-blue-200'>

        {
          actionsTop && (<div className='flex flex-row justify-end mt-2 mr-2'>
            {
              actionsTop
            }
          </div>)
        }
        {
          content&&(content)
        }
        {
          actionBottom&&(actionBottom)
        }


      </div>
    </div>
  )
}

export default VisualizeData