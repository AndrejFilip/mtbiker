import React, { useState } from "react";
import { MessagesSearchContainer } from "./MessagesSearchContainer";
import { Modal } from "@/app/ Components/Shared/Modal";
import { ConversationsSendForm } from "./ConversationsSendForm";
import { useTranslation } from "react-i18next";

export const SidePanel = ({
  messageId,
  onArchivedClick,
  onConversationsClick,
}: {
  messageId: number;
  onArchivedClick: () => void;
  onConversationsClick: () => void;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div {...{ className: "max-w-xs" }}>
      <div {...{ className: "flex flex-col gap-5" }}>
        <button
          {...{
            className:
              "btn w-[300px] h-[30px] bg-orange-400 hover:bg-orange-500 rounded-none text-white",
            onClick: () => setModalOpen(true),
          }}
        >
          {t("conversations.sidePanel.newMessage")}
        </button>
        <Modal
          {...{ modalOpen, setModalOpen, className: "max-w-[350px] modal-box" }}
        >
          <ConversationsSendForm {...{ messageId, setModalOpen }} />
        </Modal>

        <div
          {...{
            className:
              "border border-base-300 h-[50px] flex items-center mb-[-1px] hover:bg-base-200 cursor-pointer",
            onClick: onConversationsClick,
          }}
        >
          <span
            {...{
              className: "font-extrabold text-md pl-5 ",
            }}
          >
            {t("conversations.sidePanel.conversationsTitle")}
          </span>
        </div>

        <div
          {...{
            className:
              "border border-base-300 h-[50px] flex items-center hover:bg-base-200 cursor-pointer",
            onClick: onArchivedClick,
          }}
        >
          <span
            {...{
              className: "text-md pl-5 font-extrabold",
            }}
          >
            {t("conversations.sidePanel.archivedTitle")}
          </span>
        </div>
        <button
          {...{
            className:
              "btn rounded-none bg-white border-orange-500 hover:bg-orange-400 hover:text-white text-orange-500 w-auto",
          }}
        >
          {t("conversations.sidePanel.addNewLabel")}
        </button>
        <MessagesSearchContainer />
      </div>
    </div>
  );
};
