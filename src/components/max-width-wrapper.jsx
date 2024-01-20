export default function MaxWidthWrapper({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      {children}
    </div>
  );
}
