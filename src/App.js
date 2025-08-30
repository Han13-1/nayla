import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

// Core Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PressMedia from "./pages/PressMedia";
import Contact from "./pages/contactez-nous";

// Services
import ConseilPlacement from "./pages/services/conseil-placement";
import EtudeMarche from "./pages/services/etude-marche";
import MaitriseOuvrage from "./pages/services/maitrise-ouvrage";
import Viabilisation from "./pages/services/viabilisation";
import PropertyManagement from "./pages/services/property-management";
import FacilityManagement from "./pages/services/facility-management";
import Commercialisation from "./pages/services/commercialisation";

// Produits → Zone d’activité intégrée
import GallerieUrbaine from "./pages/produits/zone-activite/gallerie-commerciale-urbaine";
import GallerieExtraUrbain from "./pages/produits/zone-activite/gallerie-commerciale-extra-urbain";

// Produits → Hôtel & complexe touristique
import Hotellerie from "./pages/produits/hotel-complexe/hotellerie";
import ResidenceTouristique from "./pages/produits/hotel-complexe/residence-touristique";
import AnimationTouristique from "./pages/produits/hotel-complexe/animation-touristique";

// Produits → Immobilier
import EspaceBureau from "./pages/produits/immobilier/espace-bureau";
import AppartementVilla from "./pages/produits/immobilier/appartement-villa";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Nayla Invest - Votre partenaire immobilier</title>
        <link rel="icon" href="/naylalogo.png" />
      </Helmet>
      <Navbar />

      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<About />} />
        <Route path="/publication-media" element={<PressMedia />} />
        <Route path="/contactez-nous" element={<Contact />} />

        {/* Services */}
        <Route path="/services/conseil-placement" element={<ConseilPlacement />} />
        <Route path="/services/etude-marche" element={<EtudeMarche />} />
        <Route path="/services/maitrise-ouvrage" element={<MaitriseOuvrage />} />
        <Route path="/services/viabilisation" element={<Viabilisation />} />
        <Route path="/services/property-management" element={<PropertyManagement />} />
        <Route path="/services/facility-management" element={<FacilityManagement />} />
        <Route path="/services/commercialisation" element={<Commercialisation />} />

        {/* Produits → Zone d’activité intégrée */}
        <Route path="/produits/zone-activite/gallerie-commerciale-urbaine" element={<GallerieUrbaine />} />
        <Route path="/produits/zone-activite/gallerie-commerciale-extra-urbain" element={<GallerieExtraUrbain />} />

        {/* Produits → Hôtel & complexe touristique */}
        <Route path="/produits/hotel-complexe/hotellerie" element={<Hotellerie />} />
        <Route path="/produits/hotel-complexe/residence-touristique" element={<ResidenceTouristique />} />
        <Route path="/produits/hotel-complexe/animation-touristique" element={<AnimationTouristique />} />

        {/* Produits → Immobilier */}
        <Route path="/produits/immobilier/espace-bureau" element={<EspaceBureau />} />
        <Route path="/produits/immobilier/appartement-villa" element={<AppartementVilla />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
