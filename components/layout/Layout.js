import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM</h2>
        <Link href="/add-customer">Add Custommer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">Next.js | CRM Project &copy;</footer>
    </>
  );
}

export default Layout;
