import { MessagesConversationTableItemsProps } from "@/app/types";

export const getArchivedMessages = (
  messages: MessagesConversationTableItemsProps[]
) => {
  return messages?.filter((message) => message.archived);
};
