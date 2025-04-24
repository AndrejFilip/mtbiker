"use client";

import React, { useState } from "react";
import { SidePanel } from "./SidePanel";
import { ConversationsContainer } from "./ConversationsContainer";
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "@/app/api/messages";
import { MessagesConversationTableItemsProps } from "@/app/types";
import { getMaxId } from "../helpers/getMaxId";
import { getArchivedMessages } from "../helpers/getArchivedMessages";

export const MessagesContainer = () => {
  const { data } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });

  const messages: MessagesConversationTableItemsProps[] = data;
  const getMessageId = getMaxId(messages) + 1;
  const archivedMessages = getArchivedMessages(messages);

  console.log(archivedMessages);
  const [currentMessages, setCurrentMessages] = useState<
    "archived" | "conversations"
  >("conversations");

  const onArchivedClick = () => {
    setCurrentMessages("archived");
  };
  const onConversationsClick = () => {
    setCurrentMessages("conversations");
  };

  return (
    <div {...{ className: "w-full flex justify-center " }}>
      <div
        {...{
          className: "max-w-screen-2xl flex flex-row gap-5",
        }}
      >
        <SidePanel
          {...{
            messageId: getMessageId,
            onArchivedClick,
            onConversationsClick,
          }}
        />
        <ConversationsContainer
          {...{
            messages:
              currentMessages === "conversations" ? messages : archivedMessages,
            showArchived: currentMessages === "archived",
          }}
        />
      </div>
    </div>
  );
};
