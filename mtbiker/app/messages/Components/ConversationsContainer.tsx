import React from "react";
import { ConversationsTableItems } from "./ConversationsTableItems";
import { MessagesConversationTableItemsProps } from "@/app/types";

export const ConversationsContainer = ({
  messages,
}: {
  messages: MessagesConversationTableItemsProps[];
}) => {
  return (
    <div {...{ className: "max-w-screen-lg flex flex-col" }}>
      <span {...{ className: "text-lg font-extrabold mt-3" }}>Konverzácie</span>
      <ConversationsTableItems {...{ messages }} />
    </div>
  );
};
