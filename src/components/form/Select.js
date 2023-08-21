import styles from './Select.module.css'

function Select({text, name, options, handeOnCharge, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select 
            name={name} 
            id={name} 
            onChange={handeOnCharge} 
            value={value || ''}>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select