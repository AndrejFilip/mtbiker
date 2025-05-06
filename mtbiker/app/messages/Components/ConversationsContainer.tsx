import React from "react";
import { ConversationsTableItems } from "./ConversationsTableItems";
import { MessagesConversationTableItemsProps } from "@/app/types";
import { useTranslation } from "react-i18next";

export const ConversationsContainer = ({
  messages,
  showArchived = false,
}: {
  messages: MessagesConversationTableItemsProps[];
  showArchived: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <div {...{ className: "max-w-screen-lg flex flex-col" }}>
      <span {...{ className: "text-lg font-extrabold mt-3" }}>
        {t("conversations.title")}
      </span>
      <ConversationsTableItems {...{ messages, showArchived }} />
    </div>
  );
};
