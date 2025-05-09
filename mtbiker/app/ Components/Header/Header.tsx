"use client";

import React, { useMemo, useState } from "react";
import mtbiker from "../../images/mtbiker.png";
import { MenuButtons } from "./MenuButtons";
import { MessagesButton } from "./MessagesButton";

import { WeatherButton } from "./WeatherButton";
import { Dropdown } from "../MainPage/Dropdown";
import Link from "next/link";
import { Modal } from "../Shared/Modal";
import { SignInForm } from "./SignInForm";
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "@/app/api/messages";
import { MessagesConversationTableItemsProps } from "@/app/types";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const isUserLogged = localStorage.getItem("logged") === "true";
  const { data } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });

  const messages: MessagesConversationTableItemsProps[] = useMemo(
    () => (Array.isArray(data) ? data : []),
    [data]
  );

  const countOfUnreadMessages = useMemo(
    () => messages?.filter((message) => message.unread).length,
    [messages]
  );

  return (
    <div
      {...{
        className: "bg-white w-full h-[75px] flex flex-row",
      }}
    >
      <div {...{ className: "flex justify-start gap-5 w-2/5" }}>
        <Link {...{ href: "/" }}>
          <img
            {...{
              alt: "Logo",
              src: mtbiker.src,
              className: "w-[75px] h-[75px]",
            }}
          ></img>
        </Link>
        <MenuButtons />
      </div>
      <div
        {...{
          className: "flex items-center space-x-2 w-3/5 justify-end mr-2",
        }}
      >
        <WeatherButton />
        {isUserLogged ? (
          <>
            <MessagesButton {...{ count: countOfUnreadMessages }} />
            <Dropdown />
          </>
        ) : (
          <div>
            <span
              {...{
                className:
                  "text-orange-400 hover:underline hover:text-orange-500 cursor-pointer",
                onClick: () => setModalOpen(true),
              }}
            >
              Prihlásiť sa
            </span>
          </div>
        )}
      </div>
      <Modal
        {...{
          modalOpen,
          setModalOpen,
          className: "modal-box max-w-[750px]",
        }}
      >
        <SignInForm {...{ setModalOpen }} />
      </Modal>
    </div>
  );
};
