import { MessagesConversationTableItemsProps } from "@/app/types";

export const getMaxId = (messages: MessagesConversationTableItemsProps[]) => {
  let max = 0;

  messages?.forEach((message) => {
    if (message.id > max) {
      max = message.id;
    }
  });

  return max;
};
