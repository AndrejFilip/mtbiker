"use client";

import React from "react";
import { SidePanel } from "./SidePanel";
import { ConversationsContainer } from "./ConversationsContainer";
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "@/app/api/messages";
import { MessagesConversationTableItemsProps } from "@/app/types";
import { getMaxId } from "../helpers/getMaxId";

export const MessagesContainer = () => {
  const { data } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });

  const messages: MessagesConversationTableItemsProps[] = data;
  const getMessageId = getMaxId(messages) + 1;
  return (
    <div {...{ className: "w-full flex justify-center " }}>
      <div
        {...{
          className: "max-w-screen-2xl flex flex-row gap-5",
        }}
      >
        <SidePanel {...{ messageId: getMessageId }} />
        <ConversationsContainer {...{ messages }} />
      </div>
    </div>
  );
};
