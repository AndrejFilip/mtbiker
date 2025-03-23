import { FaBoxArchive } from "react-icons/fa6";
import { MessagesConversationTableItemsProps } from "@/app/types";
import React, { useState } from "react";
import moment from "moment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { archiveMessage, deleteMessage } from "@/app/api/messages";
import { ImCross } from "react-icons/im";
import { Modal } from "@/app/ Components/Shared/Modal";

export const ConversationTableItem = ({
  user,
  subject,
  lastMessage,
  id,
}: MessagesConversationTableItemsProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const onMutationPatch = useMutation({
    mutationKey: ["archive_message", id],
    mutationFn: archiveMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });

  const handlePatchMesage = () => {
    onMutationPatch.mutate(id);
  };
  const formattedLastMessage = moment(lastMessage).format(
    "MMMM DD, YYYY HH:mm:ss'"
  );

  const onMutationDelete = useMutation({
    mutationKey: ["delete_message", id],
    mutationFn: deleteMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });

  const handleDeleteMessage = () => {
    onMutationDelete.mutate(id);
    setModalOpen(false);
  };
  return (
    <tr>
      <th>{id}</th>
      <td>{user}</td>
      <td>{subject}</td>
      <td>{formattedLastMessage}</td>
      <td {...{ className: "flex justify-center" }}>
        <div {...{ className: "flex flex-row gap-2 items-center" }}>
          <FaBoxArchive
            {...{ onClick: handlePatchMesage, className: "cursor-pointer" }}
          />
          <ImCross
            {...{
              className: "cursor-pointer",
              onClick: () => setModalOpen(true),
            }}
          />
          <Modal
            {...{ modalOpen, setModalOpen, className: "w-300px modal-box" }}
          >
            <div
              {...{
                className: "flex flex-col gap-5 justify-center items-center",
              }}
            >
              <span {...{ className: "text-md font-bold" }}>
                Si si istý že chceš správu uplne vymazať?
              </span>
              <button
                {...{
                  className:
                    "btn  rouded-none bg-white border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white",
                  onClick: handleDeleteMessage,
                }}
              >
                Áno, vymaž
              </button>
            </div>
          </Modal>
        </div>
      </td>
    </tr>
  );
};
