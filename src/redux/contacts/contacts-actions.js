import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const addContact = createAction("contacts/add", (newName, number) => ({
  payload: {
    id: uuid(),
    name: newName,
    number,
  },
}));

const removeContact = createAction("contacts/remove");

const changeFilter = createAction("contacts/changeFilter");

const contactsActions = {
  addContact,
  removeContact,
  changeFilter,
};

export default contactsActions;
