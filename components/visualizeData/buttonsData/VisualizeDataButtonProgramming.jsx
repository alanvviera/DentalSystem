import { Button } from '@mantine/core'
import React from 'react'

const VisualizeDataButtonReschedule = ({onClick}) => {
    return (
        <Button
        onClick={()=>onClick()}
            variant="gradient"
            gradient={{ from: 'blue', to: 'indigo', deg: 155 }}
            className='m-2'
        >
            Reprogramar
        </Button>
    )
}

export default VisualizeDataButtonReschedule