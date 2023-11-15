import { EditFilled } from '@ant-design/icons'
import React from 'react'
import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const VisualizeDataButtonEdit = ({ showComponent }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return <>
        <Modal.Root opened={opened} onClose={close} className='bg-transparent ' centered
            radius={0} transitionProps={{ transition: 'fade', duration: 200 }}   > 
            <Modal.Overlay 
            />
            <Modal.Content bg={"transparent"} shadow=''  >
                <Modal.Header bg={"transparent"} shadow="">
                    {/* <Modal.Title>Modal title</Modal.Title> */}
                    <Modal.CloseButton color='red'  bg={"white"} className='bg-white' />
                </Modal.Header>
                <Modal.Body    >

                    {
                        showComponent
                    }

                </Modal.Body>
            </Modal.Content>
        </Modal.Root>

        <Button onClick={() => {
            open();
        }} variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 137 }} color='white' rightSection={<EditFilled style={{ color: "white", fontSize: "15px" }} />}><p className='text-white text-xs'>Editar</p></Button>
    </>






}

export default VisualizeDataButtonEdit


