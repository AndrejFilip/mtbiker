import React from "react";
import { ConversationsTableItems } from "./ConversationsTableItems";
import { MessagesConversationTableItemsProps } from "@/app/types";

export const ConversationsContainer = ({
  messages,
  showArchived = false,
}: {
  messages: MessagesConversationTableItemsProps[];
  showArchived: boolean;
}) => {
  return (
    <div {...{ className: "max-w-screen-lg flex flex-col" }}>
      <span {...{ className: "text-lg font-extrabold mt-3" }}>Konverzácie</span>
      <ConversationsTableItems {...{ messages, showArchived }} />
    </div>
  );
};
