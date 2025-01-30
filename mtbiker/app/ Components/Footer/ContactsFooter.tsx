import React from "react";
import { getContactsAndMtbikerItems } from "../../Texts/getContantsAndMtbikerItems";
import Link from "next/link";

export const ContactsFooter = () => {
  const items = getContactsAndMtbikerItems().items;
  const contacts = getContactsAndMtbikerItems().contacts;

  return (
    <div {...{ className: "flex flex-col gap-3" }}>
      <div>
        <p {...{ className: "text-sm text-gray-600 font-bold" }}>MTBIKER</p>
      </div>
      <div {...{ className: "flex flex-col gap-2" }}>
        {items.map((item) => (
          <p {...{ className: "text-sm" }}>{item.name}</p>
        ))}
      </div>

      <div {...{ className: "flex flex-col gap-2" }}>
        <p {...{ className: "text-sm text-gray-600 font-bold" }}>KONTAKT</p>
        <div {...{ className: "flex flex-col gap-2" }}>
          {contacts.map((contact) => (
            <p {...{ className: "text-sm" }}>{contact.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
