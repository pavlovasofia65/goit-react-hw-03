import css from './SearchBox.module.css'

export default function SearchBox({value, onChange}) {
    const handleChange = evt => {
        onChange(evt.target.value);
    };

    return(
    <div className={css.find}>
        <p className={css.text}>Find contacts by name</p>
        <input className={css.input} type="text" value={value} onChange={handleChange}/>
    </div>);
}