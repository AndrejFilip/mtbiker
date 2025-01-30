interface ModalProps {
  modalOpen: boolean;
  setModalOpen(open: boolean): boolean | void;
  children: React.ReactNode;
  className: string;
}

export const Modal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  children,
  className,
}) => {
  return (
    <div>
      {modalOpen ? (
        <div {...{ className: "modal modal-open" }}>
          <div {...{ className }}>
            <label
              {...{
                onClick: () => {
                  setModalOpen(false);
                },
                className: "btn btn-circle right-2 top-1 absolute btn-sm",
              }}
            >
              x
            </label>
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};
