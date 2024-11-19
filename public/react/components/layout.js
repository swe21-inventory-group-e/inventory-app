import react from "react";

// Layout component to include the common header and footer
function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>Marketplace</h1>
        <div className="buttons">
          <button>Mens</button>
          <button>Electronics</button>
        </div>
      </header>
      <main className="main-content">
        {children} {/* This renders the specific content for each page */}
      </main>
      <footer className="bottom-of-site">
        <button>Add page</button>
        <button>Remove page</button>
        <button>edit</button>
      </footer>
    </div>
  );
}
export default Layout;
