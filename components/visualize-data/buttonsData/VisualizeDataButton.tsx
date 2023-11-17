import React from 'react';
import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface VisualizeDataButtonProps {
  showComponent: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  titleModal?: string;
  classNameButton?: Object | undefined;
}

const VisualizeDataButton: React.FC<VisualizeDataButtonProps> = ({
  showComponent,
  title,
  icon,
  titleModal,
  classNameButton
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  
  return (
    <>
      <Modal.Root opened={opened} onClose={close} className='bg-transparent' centered radius={0} transitionProps={{ transition: 'fade', duration: 200 }}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            {titleModal && <Modal.Title w={500} c={"dimmed"}>{titleModal}</Modal.Title>}
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            {showComponent}
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <Button onClick={open} {...classNameButton} rightSection={icon}>
        <p className='text-xs'>{title}</p>
      </Button>
    </>
  );
};

export default VisualizeDataButton;
