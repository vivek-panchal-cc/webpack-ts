import React from "react";

const App = () => {
  const name = "vivek";
  return (
    <div>
      <h1>
        Welcome to React with Webpack {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src="/assets/images/Logo.jpeg" alt="Logo" />
    </div>
  );
};

export default App;
