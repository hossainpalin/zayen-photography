export default function SidebarFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center font-light text-black/75">
      <p>All content Copyright ©</p>
      <p>{year} Zayen Photography LLC</p>
    </footer>
  );
}
