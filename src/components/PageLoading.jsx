import React from "react";

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center h-[400px]">
      <p className="sr-only">Loading Page</p>
      <div className="loader2 animate-spin"></div>
    </div>
  );
};

export default PageLoading;
