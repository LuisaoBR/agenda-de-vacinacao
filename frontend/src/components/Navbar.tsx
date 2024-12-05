import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        background: "linear-gradient(to right, #1e90ff, #00bfff)",
        padding: "1rem",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "5px 5px 5px black",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Agenda de Vacinação</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{
            backgroundColor: "transparent",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onClick={() => alert("Indo para Home!")}
        >
          Home
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onClick={() => alert("Indo para Sobre!")}
        >
          Sobre
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
