import React from "react";
import { ConversationTableItem } from "./ConversationTableItem";
import { MessagesConversationTableItemsProps } from "@/app/types";
import { CiWarning } from "react-icons/ci";

export const ConversationsTableItems = ({
  messages,
}: {
  messages: MessagesConversationTableItemsProps[];
}) => {
  const activeMessages = messages?.filter(
    (message: MessagesConversationTableItemsProps) => !message.archived
  );
  return (
    <div>
      {activeMessages?.length != 0 ? (
        <div
          {...{ className: "w-full border-t border-b border-base-200 mt-7" }}
        >
          <table {...{ className: "table max-w-screen-xl" }}>
            <thead>
              <tr>
                <th></th>
                <th>Používateľ</th>
                <th>Názov konverzácie</th>
                <th>Posledná správa</th>
                <th>Archivovať / Vymazať</th>
              </tr>
            </thead>
            <tbody>
              {activeMessages?.map(
                (message: MessagesConversationTableItemsProps) => (
                  <ConversationTableItem
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
          <span>Nemáš žiadne aktívne správy</span>
        </div>
      )}
    </div>
  );
};
