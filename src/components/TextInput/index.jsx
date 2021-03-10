import './styles.css';
export const TextInput = ({searchValue, handleChange}) => (

    <input
    className="text-input"
    value={searchValue}
    type="search"
    onChange={handleChange}
    placeholder="Type your search" />
)