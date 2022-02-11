import React from "react";
import { useEffect, useState } from "react";
import { getArticlesCount } from "../utils/utils";

const PageCount = ({ selectedTopic, currentPage, setCurrentPage }) => {
  useEffect(() => {
    getArticlesCount(selectedTopic).then((res) => {
      setCurrentPage({ page: 1, maxPage: Math.ceil(res / 10) });
    });
  }, [selectedTopic]);

  const pageNumHandler = (event, num) => {
    event.preventDefault();
    setCurrentPage(num);
    window.scroll(0, 0);
  };

  return (
    <div>
      {Array.from({ length: currentPage.maxPage }, (v, i) => i + 1).map(
        (num) => {
          return (
            <button key={num} onClick={(event) => pageNumHandler(event, num)}>
              <a href="">{num}</a>
            </button>
          );
        }
      )}
    </div>
  );
};

export default PageCount;
