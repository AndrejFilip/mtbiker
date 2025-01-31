interface ModalProps {
  modalOpen: boolean;
  setModalOpen(open: boolean): boolean | void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Modal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  children,
  className,
  style,
}) => {
  return (
    <div>
      {modalOpen ? (
        <div {...{ className: "modal modal-open" }}>
          <div {...{ className, style }}>
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
