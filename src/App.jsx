import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './component/header/header'
import Home from './component/home/Home'
import About from './component/about/about'
import Events from './component/events/events'
import Contact from './component/contact/contact'
import Gallery from './component/gallery/gallery'
import Login from './component/login/login'
import SignUp from './component/signup/signup'
import EventDetails from './component/event-details/EventDetails'
import AdminLogin from "./component/admin/login/AdminLogin"
import AdminPanel from "./component/admin/dashboard/dashboard"

const App = () => {
  const isAdminRoute = window.location.pathname.startsWith("/admin")

  return (
    <Router>

      {!isAdminRoute && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event" element={<Events />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/users" element={<AdminPanel page="users" />} />
        <Route path="/admin/addevent" element={<AdminPanel page="event" />} />
        <Route path="/admin/category" element={<AdminPanel page="category" />} />
        <Route path="/admin/addgallary" element={<AdminPanel page="gallery" />} />
        <Route path="/admin/contactlist" element={<AdminPanel page="contacts" />} />
        <Route path="/admin/profile" element={<AdminPanel page="profile" />} />
        <Route path="/admin/profile/password" element={<AdminPanel page="password" />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </Router>
  )
}

export default App
