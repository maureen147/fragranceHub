import { useSearch } from "../contexts/Search";
import SearchProductCard from "../components/cards/SearchProductCard";
import Jumbotron from "../components/cards/Jumbotron";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

export default function Search() {
  const [values, setValues] = useSearch();
  // console.log(values);

  return (
    <>
      <Menu />
      <SideNav />
      <Jumbotron
        title="Search results"
        subTitle={
          values?.results?.length < 1
            ? "No products found"
            : `Found ${values?.results?.length} ${
                values?.results?.length > 1 ? "products" : "product"
              }`
        }
      />

      <div className="container mt-3">
        <div className="row">
          {values?.results?.map((p) => (
            <div key={p._id} className="col-md-4">
              <SearchProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
