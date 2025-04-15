import { MessagesConversationTableItemsProps } from "@/app/types";

export const getMaxId = (messages: MessagesConversationTableItemsProps[]) => {
  return Math.max(...(messages?.map((message) => message.id) ?? []), 0);
};
