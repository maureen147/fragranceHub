import { NavLink } from "react-router-dom";
import "../../css/Admin.css"

const AdminMenu = () => {
  
  return (
    <>
      <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Links</div>

      <ul className="list-group list-unstyled">
        <li>
          <NavLink className="list-group-item text-dark"  to="/dashboard/admin-category">
            Create category
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item text-dark" to="/dashboard/admin-product">
            Create product
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item text-dark" to="/dashboard/admin-products">
            Products
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item text-dark" to="/dashboard/admin-orders">
            Manage orders
          </NavLink>
        </li>
      </ul>
    </>
  );
}
 export default AdminMenu