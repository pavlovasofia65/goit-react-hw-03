import css from './Contact.module.css';

export default function Contact({contact, onDelete}) {
    return(
    <div className={css.cont}>
        <div className={css.contactInfo}>
            <p className={css.contactInfoText}>👤 {contact.name}</p>
            <p className={css.contactInfoText}>📞 {contact.number}</p>
        </div>
        <button className={css.btn} onClick={(() => onDelete(contact.id))}>Delete</button>
    </div>);
}