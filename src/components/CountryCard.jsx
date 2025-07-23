export default function CountryCard ({ flag, name = 'Country', capital = 'Capital' }) {
    return (
            <div className="country-card">
                <img src={flag} alt={name} className="flag" />
                <h2>{name}</h2>
            </div>
)}