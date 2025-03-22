import React from "react";
import { ConversationTableItem } from "./ConversationTableItem";
import { MessagesConversationTableItemsProps } from "@/app/types";

export const ConversationsTableItems = ({
  messages,
}: {
  messages: MessagesConversationTableItemsProps[];
}) => {
  console.log(messages);
  return (
    <div {...{ className: "w-full border-t border-b border-base-200 mt-7" }}>
      <table {...{ className: "table max-w-screen-xl" }}>
        <thead>
          <tr>
            <th></th>
            <th>Používateľ</th>
            <th>Názov konverzácie</th>
            <th>Poslednás správa</th>
          </tr>
        </thead>
        <tbody>
          {messages?.map((message) => (
            <ConversationTableItem
              {...{
                ...message,
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
