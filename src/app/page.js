"use client"
import Image from "next/image";
import { Navbar } from "@/Components/Navbar";
import { Cards } from "@/Components/Cards";
import { useEffect, useState } from "react";
const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles");
  const articles = await res.json()
  return articles
}
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const getData = async () => {
    setIsLoading(true)
    const data = await getArticle();
    setArticles(data);
    setIsLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Cards articles={articles} />
    </>
  )
}
