import { Input } from "@/app/ Components/Shared/Input";
import { MessagesConversationTableItemsProps } from "@/app/types";
import React from "react";
import moment from "moment";

export const ConversationTableItem = ({
  user,
  subject,
  lastMessage,
  id,
}: MessagesConversationTableItemsProps) => {
  const formattedLastMessage = moment(lastMessage).format(
    "MMMM DD, YYYY HH:mm:ss'"
  );
  return (
    <tr>
      <th>
        <Input {...{ type: "checkbox", height: 10 }} />
      </th>
      <td>{user}</td>
      <td>{subject}</td>
      <td>{formattedLastMessage}</td>
    </tr>
  );
};
