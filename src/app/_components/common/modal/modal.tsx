import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { CustomModalParams } from "@/types/common/modal/modal";

export default function CustomModal({
  isOpen,
  onOpenChange,
  header,
  children,
  footer,
  size,
}: CustomModalParams) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={size}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer(onClose)}</ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
