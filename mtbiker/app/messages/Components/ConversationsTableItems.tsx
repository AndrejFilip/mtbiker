import React from "react";
import { ConversationTableItem } from "./ConversationTableItem";
import { MessagesConversationTableItemsProps } from "@/app/types";
import { CiWarning } from "react-icons/ci";

export const ConversationsTableItems = ({
  messages,
  showArchived = false,
}: {
  messages: MessagesConversationTableItemsProps[];
  showArchived: boolean;
}) => {
  const filteredMessages = messages?.filter(
    (message: MessagesConversationTableItemsProps) =>
      showArchived ? message.archived : !message.archived
  );
  return (
    <div>
      {filteredMessages?.length != 0 ? (
        <div
          {...{ className: "w-full border-t border-b border-base-200 mt-7" }}
        >
          <table {...{ className: "table" }}>
            <thead>
              <tr>
                <th></th>
                <th>Používateľ</th>
                <th {...{ className: "w-[500px]" }}>Názov konverzácie</th>
                <th>Posledná správa</th>
                {!showArchived ? (
                  <td>Archivovať/Vymazať</td>
                ) : (
                  <td>Odarchivovať/Vymazať</td>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredMessages?.map(
                (message: MessagesConversationTableItemsProps) => (
                  <ConversationTableItem
                    key={message.id}
                    {...{
                      ...message,
                    }}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          {...{
            className:
              "w-[1000px] border border-orange-300 bg-orange-100 h-[40px] flex flex-row items-center gap-2 p-2 mt-5",
          }}
        >
          <CiWarning {...{ className: "text-orange-600 " }} />{" "}
          <span>Nemáš tu žiadne správy</span>
        </div>
      )}
    </div>
  );
};
