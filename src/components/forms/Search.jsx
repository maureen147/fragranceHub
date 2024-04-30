import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../contexts/Search";
import Seicon from "../../assets/icons/Vector (5).png";


const Search = ({toggleSearchBar})=> {
  // hooks
  const [values, setValues] = useSearch();  //coming from useSearch(context/search)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {   //always prevent default when working with forms
    e.preventDefault();
    try {
      const { data } = await axios.get(`/product/search/${values?.keyword}`);
      // console.log(data);
      setValues({ ...values, results: data?.products });
      navigate("/search");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        style={{ borderRadius: "0px" }}
        className="form-control real-search"
        placeholder="Search"
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        value={values.keyword}
      />
      <button
        className="btn btn-dark real-search"
        type="submit"
        style={{ borderRadius: "0px" }}
      >
        {/* Search */}
        <img src={Seicon} alt="" onClick={toggleSearchBar} />
      </button>
    </form>
  );
}

export default Search
