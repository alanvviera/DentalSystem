 const checkEnvironment = () => {
    let base_url = process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://dental-system.vercel.app";
  
    return base_url;
  };

  export {
    checkEnvironment
  }