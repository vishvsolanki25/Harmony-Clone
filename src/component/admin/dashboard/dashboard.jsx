import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashbord.css";

const API_URL = "http://localhost:3046/api/v1";

const sampleUsers = [
  { fullName: "Vishal", email: "vishalbavaliya21@gmail.com", gender: "male", mobile_no: "7755934563", avatar: "https://api.dicebear.com/8.x/personas/svg?seed=Vishal", block: true },
  { fullName: "uday", email: "u@gmail.com", gender: "male", mobile_no: "7777777777", avatar: "https://api.dicebear.com/8.x/personas/svg?seed=Uday", block: true },
  { fullName: "aj", email: "ajay@gmail.com", gender: "male", mobile_no: "9999999999", avatar: "https://api.dicebear.com/8.x/personas/svg?seed=Aj", block: true },
  { fullName: "khushbu", email: "khushi@gmail.com", gender: "Female", mobile_no: "1234567891", avatar: "https://api.dicebear.com/8.x/personas/svg?seed=Khushbu", block: true },
];

const sampleContacts = [
  { fullName: "sparks user", email: "spark@gmail.com", mobile_no: "8989898989", message: "new contact" },
  { fullName: "", email: "ssc786@gmail.com", mobile_no: "", message: "" },
  { fullName: "uday shrimali", email: "udshrimali@gmail.com", mobile_no: "7676767676", message: "New Contact" },
  { fullName: "uday", email: "udayshrimali@gmail.com", mobile_no: "7777777777", message: "hello admin!!" },
  { fullName: "rhythem2003", email: "rhythem2003@gmail.com", mobile_no: "09484769544", message: "hi" },
  { fullName: "prince", email: "prince@gmail.com", mobile_no: "1234567890", message: "hello admin!!" },
];

const sampleCategories = [
  { category_name: "Cricket", URL: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=120&q=80" },
  { category_name: "Office Party", URL: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=120&q=80" },
  { category_name: "December events", URL: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=120&q=80" },
  { category_name: "Food Zone", URL: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=120&q=80" },
  { category_name: "Garba", URL: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=120&q=80" },
  { category_name: "xyz", URL: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=120&q=80" },
];

const navItems = [
  { label: "User List", path: "/admin", page: "users", icon: "user" },
  { label: "Event Post", path: "/admin/addevent", page: "event", icon: "calendar" },
  { label: "Post Category", path: "/admin/category", page: "category", icon: "category" },
  { label: "Add Gallary", path: "/admin/addgallary", page: "gallery", icon: "image" },
  { label: "Contact List", path: "/admin/contactlist", page: "contacts", icon: "contact" },
];

const AdminPanel = ({ page }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const activePage = page || getPageFromPath(location.pathname);
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [categories, setCategories] = useState([]);

  const token = useMemo(() => localStorage.getItem("adminToken"), []);
  const authHeaders = useMemo(() => token ? { Authorization: token } : {}, [token]);

  useEffect(() => {
    axios.get(`${API_URL}/admin/users`, { headers: authHeaders }).then((res) => {
      if (Array.isArray(res.data?.data)) setUsers(res.data.data);
    }).catch(() => setUsers(sampleUsers));

    axios.get(`${API_URL}/contact/allmessage`, { headers: authHeaders }).then((res) => {
      if (Array.isArray(res.data?.data)) setContacts(res.data.data);
    }).catch(() => setContacts(sampleContacts));

    axios.get(`${API_URL}/admin/categories`, { headers: authHeaders }).then((res) => {
      if (Array.isArray(res.data?.data)) setCategories(res.data.data);
    }).catch(() => setCategories(sampleCategories));
  }, [authHeaders]);

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="admin-panel">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-spacer" />
        <nav>
          {navItems.map((item) => (
            <Link className={`admin-nav-link ${activePage === item.page ? "active" : ""}`} to={item.path} key={item.path}>
              <span className={`admin-nav-icon ${item.icon}`} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="admin-auth-label">Authentication</div>
        <button className="admin-logout" onClick={logout}>
          <span className="admin-nav-icon logout" />
          Log Out
        </button>
      </aside>

      <main className="admin-main">
        <AdminTopbar />
        {activePage === "users" && <UserList users={users} setUsers={setUsers} authHeaders={authHeaders} />}
        {activePage === "event" && <PostEvent categories={categories} authHeaders={authHeaders} />}
        {activePage === "category" && <PostCategory categories={categories} setCategories={setCategories} authHeaders={authHeaders} />}
        {activePage === "gallery" && <AddGallery authHeaders={authHeaders} />}
        {activePage === "contacts" && <ContactList contacts={contacts} />}
        {activePage === "profile" && <AdminProfile />}
        {activePage === "password" && <AdminPassword />}
      </main>
    </div>
  );
};

const getPageFromPath = (path) => {
  if (path.includes("/addevent")) return "event";
  if (path.includes("/category")) return "category";
  if (path.includes("/addgallary")) return "gallery";
  if (path.includes("/contactlist")) return "contacts";
  if (path.includes("/profile/password")) return "password";
  if (path.includes("/profile")) return "profile";
  return "users";
};

const AdminTopbar = () => (
  <header className="admin-topbar">
    <strong>Admin</strong>
    <Link className="admin-profile-mini" to="/admin/profile">
      <span className="admin-avatar" />
      <span>Event Management<br />Admin</span>
    </Link>
  </header>
);

const LockTitle = ({ title }) => (
  <div className="admin-form-title">
    <span className="lock-circle">▣</span>
    <p>{title}</p>
  </div>
);

const FilePicker = ({ onChange }) => (
  <div className="admin-file-row">
    <input type="file" onChange={onChange} />
    <span>CHOOSE PIC</span>
  </div>
);

const UserList = ({ users, setUsers, authHeaders }) => {
  const toggleBlock = async (userId) => {
    if (!userId) return;

    const response = await axios.post(`${API_URL}/admin/users/block`, { _id: userId }, { headers: authHeaders });
    alert(response.data.message);
    setUsers((currentUsers) => currentUsers.map((user) => (
      user._id === userId ? { ...user, block: !user.block } : user
    )));
  };

  return (
    <AdminTable headers={["No", "Profile", "Name", "Email", "Gender", "Phone number", "Action"]}>
      {users.map((user, index) => (
        <tr key={user._id || user.email || index}>
          <td>{index + 1}</td>
          <td><img className="user-photo" src={user.avatar || sampleUsers[index % sampleUsers.length].avatar} alt="" /></td>
          <td>{user.fullName}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
          <td>{user.mobile_no}</td>
          <td><button className="status-btn" onClick={() => toggleBlock(user._id)}>{user.block ? "Unblock" : "Block"}</button></td>
        </tr>
      ))}
    </AdminTable>
  );
};

const ContactList = ({ contacts }) => (
  <AdminTable headers={["No", "fullName", "email", "mobile_no", "message"]}>
    {contacts.map((contact, index) => (
      <tr key={contact._id || index}>
        <td>{index + 1}</td>
        <td>{contact.fullName}</td>
        <td>{contact.email}</td>
        <td>{contact.mobile_no}</td>
        <td>{contact.message}</td>
      </tr>
    ))}
  </AdminTable>
);

const AdminTable = ({ headers, children }) => (
  <div className="admin-table-wrap">
    <table className="admin-table">
      <thead>
        <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

const PostEvent = ({ categories, authHeaders }) => {
  const emptyForm = {
    title: "",
    s_date: "",
    e_date: "",
    s_time: "",
    e_time: "",
    price: "",
    category_id: "",
    location: "",
    description: "",
  };
  const [form, setForm] = useState(emptyForm);
  const [image, setImage] = useState(null);
  const selectedCategory = categories.find((category) => category._id === form.category_id);

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitEvent = async () => {
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    data.append("category_name", selectedCategory?.category_name || "");
    if (image) data.append("avatar", image);

    const response = await axios.post(`${API_URL}/admin/events`, data, { headers: authHeaders });
    alert(response.data.message);
    setForm(emptyForm);
    setImage(null);
  };

  return (
    <section className="admin-form-page">
      <LockTitle title="Post Event" />
      <form className="admin-stack-form">
        <FilePicker onChange={(event) => setImage(event.target.files?.[0])} />
        <input name="title" placeholder="Title*" value={form.title} onChange={updateField} />
        <input name="s_date" type="date" value={form.s_date} onChange={updateField} />
        <input name="e_date" type="date" value={form.e_date} onChange={updateField} />
        <input name="s_time" type="time" value={form.s_time} onChange={updateField} />
        <input name="e_time" type="time" value={form.e_time} onChange={updateField} />
        <input name="price" placeholder="Price" value={form.price} onChange={updateField} />
        <select name="category_id" value={form.category_id} onChange={updateField}>
          <option value="" disabled>Select Category</option>
          {categories.map((category) => <option value={category._id} key={category._id || category.category_name}>{category.category_name}</option>)}
        </select>
        <input name="location" placeholder="Location" value={form.location} onChange={updateField} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={updateField} />
        <button type="button" onClick={submitEvent}>POST</button>
      </form>
    </section>
  );
};

const PostCategory = ({ categories, setCategories }) => {
  const [name, setName] = useState("");

  const addCategory = () => {
    if (!name.trim()) return;
    setCategories([{ category_name: name.trim(), URL: sampleCategories[0].URL }, ...categories]);
    setName("");
  };

  return (
    <section className="admin-form-page category-page">
      <LockTitle title="Post Category" />
      <form className="admin-stack-form compact">
        <FilePicker />
        <input placeholder="Category name*" value={name} onChange={(event) => setName(event.target.value)} />
        <button type="button" onClick={addCategory}>POST</button>
      </form>
      <AdminTable headers={["No", "image", "Name", "Action"]}>
        {categories.map((category, index) => (
          <tr key={`${category.category_name}-${index}`}>
            <td>{index + 1}</td>
            <td><img className="category-photo" src={category.URL} alt="" /></td>
            <td>{category.category_name}</td>
            <td><button className="delete-btn" type="button">■</button></td>
          </tr>
        ))}
      </AdminTable>
    </section>
  );
};

const AddGallery = () => (
  <section className="admin-form-page">
    <LockTitle title="Add Gallary" />
    <form className="admin-stack-form compact">
      <FilePicker />
      <input placeholder="Gallary name*" />
      <button type="button">POST</button>
    </form>
  </section>
);

const AdminProfileShell = ({ children }) => (
  <section className="admin-profile-page">
    <div className="admin-cover"><span /></div>
    <div className="admin-tabs">
      <Link to="/admin/profile">Personal Detail</Link>
      <Link to="/admin/profile/password">Change Password</Link>
    </div>
    {children}
  </section>
);

const AdminProfile = () => (
  <AdminProfileShell>
    <div className="admin-profile-card">
      <h3>Personal Details</h3>
      <div className="admin-profile-grid">
        <label>Full Name:<input defaultValue="Event Management" /></label>
        <label>Email Address:<input defaultValue="event@gmail.com" /></label>
      </div>
      <button type="button">Update</button>
    </div>
  </AdminProfileShell>
);

const AdminPassword = () => (
  <AdminProfileShell>
    <div className="admin-profile-card">
      <h3>Change Password</h3>
      <div className="admin-profile-grid three">
        <label>Old Password:<input type="password" /></label>
        <label>New Password:<input type="password" /></label>
        <label>Conform New Password:<input type="password" /></label>
      </div>
      <button type="button">Update</button>
    </div>
  </AdminProfileShell>
);

export default AdminPanel;
