import React from "react";
import { SidePanel } from "./SidePanel";
import { ConversationsContainer } from "./ConversationsContainer";

export const MessagesContainer = () => {
  return (
    <div {...{ className: "w-full flex justify-center " }}>
      <div
        {...{
          className: "max-w-screen-2xl flex flex-row gap-5",
        }}
      >
        <SidePanel />
        <ConversationsContainer />
      </div>
    </div>
  );
};
