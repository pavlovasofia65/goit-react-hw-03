import Contact from "./Contact/Contact";
import css from './ContactList.module.css';

export default function ContactList({contacts, onDelete}) {
    return (
    <div className={css.contacts}>
        {contacts.map(cont => 
        <Contact key = {cont.id} contact = {cont} onDelete={onDelete}></Contact>)}
    </div>);
}