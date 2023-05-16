import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import Error from './components/Error'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

import './app.css'

function App() {
  const [theme, setTheme] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <div>
      <Navbar
        title="TextUtils"
        links={[
          {
            title: 'about',
            url: '/about'
          },
          {
            title: 'contact',
            url: '/contact'
          },
          {
            title: 'service',
            url: '/service'
          }
        ]}
        theme={theme}
        setTheme={setTheme}
        showAlert={showAlert}
      />

      <div className="container mt-3">
        <Alert alert={alert} />
      </div>

      <Routes>
        <Route path='/' element={
          <TextForm
            heading="Anaylze text 🔥"
            labeling="Enter Text 🐹"
            showAlert={showAlert}
          />
        } />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
