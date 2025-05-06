import React from "react";
import { ConversationTableItem } from "./ConversationTableItem";
import { MessagesConversationTableItemsProps } from "@/app/types";
import { CiWarning } from "react-icons/ci";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
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
                <th> {t("conversations.conversationTable.user")}</th>
                <th {...{ className: "w-[500px]" }}>
                  {t("conversations.conversationTable.subject")}
                </th>
                <th>{t("conversations.conversationTable.lastMessage")}</th>
                {!showArchived ? (
                  <td>
                    {t("conversations.conversationTable.archive")}/
                    {t("conversations.conversationTable.delete")}
                  </td>
                ) : (
                  <td>
                    {t("conversations.conversationTable.unarchive")}/
                    {t("conversations.conversationTable.delete")}
                  </td>
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
          <span>{t("conversations.conversationTable.noMessage")}</span>
        </div>
      )}
    </div>
  );
};
