import { CSSTransition } from "react-transition-group";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import s from "./index.css";

function App() {
  return (
    <div className={s.page}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        <h1 className={s.phoneBookTitle}>Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      {/* <CSSTransition
        in={contacts.length > 1}
        appear={true}
        timeout={250}
        unmountOnExit
        classNames={fadeFilter}
      > */}
      <div className={s.findContacts}>
        <h2 className={s.findContactsTitle}>Find contacts</h2>
        <Filter />
      </div>
      {/* </CSSTransition> */}

      <ContactList />
    </div>
  );
}

export default App;
