import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { CustomModalParams } from "@/types/common/modal/modal";

export function CustomModal({
  className,
  classNames,
  isOpen,
  onOpenChange,
  header,
  children,
  footer,
  size,
  hideCloseButton,
}: CustomModalParams) {
  return (
    <Modal
      className={className}
      classNames={classNames}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size={size}
      hideCloseButton={hideCloseButton}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
            {children ? <ModalBody>{children(onClose)}</ModalBody> : null}
            {footer ? <ModalFooter>{footer(onClose)}</ModalFooter> : null}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
