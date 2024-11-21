import React, { useState } from "react";
import AddPage from "./AddPage";
import RemovePage from "./RemovePage"; // Import RemovePage
import EditPage from "./EditPage";

function Layout({ children, setItems }) {
  const [page, setPage] = useState("index"); // Default page is "index"

  // Conditional rendering based on the page state
  if (page === "index") {
    return (
      <div className="layout">
        <header className="header">
          <h1>Marketplace</h1>
          <div className="buttons">
            <button>Mens</button>
            <button>Electronics</button>
          </div>
        </header>
        <main className="main-content">{children}</main>
        <footer className="bottom-of-site">
          {/* Page control buttons */}
          <button onClick={() => setPage("edit")}>Add page</button>
          <button onClick={() => setPage("remove")}>Remove page</button>
        </footer>
      </div>
    );
  } else if (page === "edit") {
    return <AddPage goback={() => setPage("index")} setItems={setItems} />;
  } else if (page === "remove") {
    return <RemovePage goback={() => setPage("index")} setItems={setItems} />;
  } 
}

export default Layout;
