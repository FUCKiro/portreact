import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ChiSono, Contact, Home, Servizi, NotFound } from "./pages";

const App = () => {
  return (
    <LanguageProvider>
      <main className='bg-slate-300/20'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/*'
              element={
                <>
                  <Routes>
                    <Route path='/chi-sono' element={<ChiSono />} />
                    <Route path='/servizi' element={<Servizi />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </main>
    </LanguageProvider>
  );
};

export default App;
