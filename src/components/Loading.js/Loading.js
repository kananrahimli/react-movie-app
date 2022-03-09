import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import "./loading.css";
export default function Loading() {
  return (
    <div className="loading">
      <div className="movies px-4 mt-5 pt-4 d-flex justify-content-center align-items-center ">
        <ContentLoader
          viewBox="0 0 400 160"
          height={160}
          width={400}
          backgroundColor="transparent"
        >
          <circle cx="150" cy="86" r="8" />
          <circle cx="194" cy="86" r="8" />
          <circle cx="238" cy="86" r="8" />
        </ContentLoader>
      </div>
    </div>
  );
}
