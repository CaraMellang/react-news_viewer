import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usePromise from "../lib/usePromise";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://naver.com",
//   urlToImage: "https://via.placeholder.com/160",
// };

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=807fe9037e03442eb54dc14e2abf9fdc`
    );
  }, [category]);

  //대기중일때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  //아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>Error! {error}</NewsListBlock>;
  }
  //response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
