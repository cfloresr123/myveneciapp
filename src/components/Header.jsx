import logo from '../assets/logo.png' // ajusta la ruta según tu estructura

export default function Header() {
  return (
    <header className="bg-primary text-white text-center py-6 shadow">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src={logo}
          alt="MyVeneciApp Logo"
          className="w-32 h-auto mb-4"
        />
        <p className="text-lg md:text-xl max-w-xl">
          La solución digital para administrar tu edificio de forma sencilla, moderna y segura.
        </p>
      </div>
    </header>
  );
}