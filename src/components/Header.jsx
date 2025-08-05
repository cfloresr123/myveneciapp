import logo from '../assets/logo.png' // ajusta la ruta según tu estructura

export default function Header() {
  return (
    <header className="bg-primary text-white text-center py-8 shadow-md">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={logo}
            alt="MyVeneciApp Logo"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-lg md:text-xl max-w-xl">
          La solución digital para administrar tu edificio de forma sencilla, moderna y segura.
        </p>
      </div>
    </header>
  );
}