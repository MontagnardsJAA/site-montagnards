export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-red-600 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img src="/logo.png" alt="Montagnards Logo" className="h-16" />
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Accueil</a>
            <a href="#horaire" className="hover:underline">Horaire</a>
            <a href="#nouvelles" className="hover:underline">Nouvelles</a>
            <a href="#joueurs" className="hover:underline">Joueurs</a>
            <a href="#classement" className="hover:underline">Classement</a>
            <a href="#galerie" className="hover:underline">Galerie</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-6 space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-green-700">Bienvenue chez les Montagnards Junior AA</h1>
          <p className="mt-4 text-lg">L'esprit d'équipe, la passion du hockey, et la fierté des Laurentides.</p>
        </section>
        <section id="horaire"><h2 className="text-2xl font-semibold text-red-600 mb-4">Horaire des matchs</h2><p>(À venir)</p></section>
        <section id="nouvelles"><h2 className="text-2xl font-semibold text-red-600 mb-4">Dernières nouvelles</h2><div className="p-4 border rounded bg-gray-100"><h3 className="text-xl font-bold">Camp d'entraînement - Août 2025</h3><p className="mt-2">Les joueurs sont attendus sur la glace du 5 au 7 août au centre Damien-Hétu.</p></div></section>
        <section id="joueurs"><h2 className="text-2xl font-semibold text-red-600 mb-4">Liste des joueurs</h2><p>(Statistiques et alignement à venir)</p></section>
        <section id="classement"><h2 className="text-2xl font-semibold text-red-600 mb-4">Classement</h2><p>(Classement à jour de la ligue à venir)</p></section>
        <section id="galerie"><h2 className="text-2xl font-semibold text-red-600 mb-4">Galerie photo</h2><p>(Photos de matchs et de l'équipe à venir)</p></section>
        <section id="contact" className="text-center"><h2 className="text-2xl font-semibold text-red-600 mb-4">Contact</h2><p>Pour toute question, veuillez nous écrire à <a href="mailto:MontagnardsJAA@gmail.com" className="underline text-green-700">MontagnardsJAA@gmail.com</a></p></section>
      </main>
      <footer className="bg-gray-200 text-center py-4 mt-12">
        <p>&copy; 2025 Montagnards de Ste-Agathe Junior AA</p>
      </footer>
    </div>
  );
}
