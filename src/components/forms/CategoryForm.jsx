import LoadBtn from "../utils/LoadBtn";

const CategoryForm = ({
  value,
  setValue,
  handleSubmit,
  buttonText = "Submit",
  handleDelete,
  placeholder,
  loading,
  LoadBtn,
}) => {
  return (
    <div className="p-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control p-3"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="d-flex mx-2">
          <button className="btn btn-primary mt-3">{buttonText}</button>

          {handleDelete && (
            <button onClick={handleDelete} className="btn btn-danger mt-3 ms-3">
              {loading ? <LoadBtn/> : "Delete"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
