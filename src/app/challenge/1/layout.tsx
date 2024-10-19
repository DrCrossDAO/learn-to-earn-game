// import Popup from './popup'; // Comment this out

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      {children}
    </div>
  );
}
