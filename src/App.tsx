import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Instructors from './components/Instructors';
import Benefits from './components/Benefits';
import EnrollmentCTA from './components/EnrollmentCTA';
import Structure from './components/Structure';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Instructors />
        <Benefits />
        <EnrollmentCTA />
        <Structure />
        <Plans />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
