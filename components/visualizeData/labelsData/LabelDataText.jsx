import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import { Container, Flex, Space, Title } from '@mantine/core'
//pt-4 pb-2 md:pt-6 md:pb-3 md:mx-4 
export const LabelDataText = ({ type = "", title = "", useTextArea = false }) => {
    return (

        <div className='bg-primary text-white my-2 py-2 mx-5 relative rounded-md md:max-w-[350px]'>
            <Flex align={"center"} justify={"center"} direction={"row"} wrap={"wrap"} className='pt-4 pb-2 md:pt-6 md:pb-3 md:mx-4' >
                {
                    !useTextArea ? (<p className='text-sm md:text-md'>{title}</p>) : (<textarea defaultValue={title} disabled rows={4} className='text-sm md:text-xs font-normal text-black p-1 w-full mx-3 rounded-md bg-white'></textarea>)
                }
                {
                    !useTextArea && (<> <Space w={"xs"}></Space>
                        <CaretDownOutlined style={{ fontSize: "15px" }} /></>)
                }

            </Flex>
            <p className='absolute top-0 left-0 text-[10px] ml-1 mt-1 text-black bg-secondary px-2 rounded-sm'>{type}</p>
        </div>

    )
}
