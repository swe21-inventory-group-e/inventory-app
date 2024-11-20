import React, { useState } from "react";
import AddPage from "./AddPage";

// Layout component to include the common header and footer
function Layout({ children, setItems }) {
  const [page, setPage] = useState("index")

  if(page == "index") {
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
          <button onClick={() => setPage("edit")} >Add page</button>
          <button>Remove page</button>
          <button>edit</button>
        </footer>
      </div>
    );
  }
  else if (page == "edit") {
    return (<AddPage goback={() => setPage("index")} setItems={setItems} />)
  }
}
export default Layout;
