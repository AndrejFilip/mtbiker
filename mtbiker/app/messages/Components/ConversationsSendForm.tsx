import { Input } from "@/app/ Components/Shared/Input";
import { sendMessages } from "@/app/api/messages";
import { MessagesConversationPostProps } from "@/app/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

export const ConversationsSendForm = ({
  messageId,
  setModalOpen,
}: {
  messageId: number;
  setModalOpen(e: boolean): void;
}) => {
  const { register, handleSubmit } = useForm<MessagesConversationPostProps>();
  const queryClient = useQueryClient();
  const dateAndTimeNow = new Date().toISOString();
  const onMessagesPostHandler = useMutation({
    mutationKey: ["post_messages"],
    mutationFn: sendMessages,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });

  const handlePostMessages = (formData: MessagesConversationPostProps) => {
    onMessagesPostHandler.mutate({
      ...formData,
      lastMessage: dateAndTimeNow,
      id: messageId,
    });
    setModalOpen(false);
  };

  return (
    <div {...{ className: "w-full flex flex-col gap-2" }}>
      <span {...{ className: "text-lg font-extrabold" }}>
        Napísať novú správu
      </span>

      <form
        {...{
          onSubmit: handleSubmit(handlePostMessages),
          className: "w-full flex flex-col gap-2",
        }}
      >
        <span {...{ className: "text-sm font-bold" }}>Odosielateľ</span>
        <Input
          {...{
            placeholder: "odosielateľ",
            height: 40,
            ...register("user"),
          }}
        />
        <span {...{ className: "text-sm font-bold" }}>Predmet</span>
        <Input
          {...{
            placeholder: "Predmet",
            height: 40,
            ...register("subject"),
          }}
        />
        <span {...{ className: "text-sm font-bold" }}>Obsah správy</span>
        <textarea
          {...{
            className: "textarea border border-base-300 h-[200px]",
            placeholder: "Obsah správy",
            ...register("body"),
          }}
        />
        <button
          {...{
            className:
              "btn rounded-none bg-orange-400 hover:bg-orange-500 text-white",
            type: "submit",
          }}
        >
          Odoslať správu
        </button>
      </form>
    </div>
  );
};
