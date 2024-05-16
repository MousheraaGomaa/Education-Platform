
import styles from './search.module.css'
const Search = ({onInput})=>{
    return(
        <div className={styles?.["search-container"]}>
            <input type="text" placeholder="Search from Courses..." onInput={onInput}/>
        </div>
    );
}

export default Search;
{/* 
<Search onInput={handleInput}/>
    const handleInput = (e)=>{
        console.log(e.target.value)
    }

*/}