"use client"
import Image from "next/image";
import { Navbar } from "@/Components/Navbar";
import { Cards } from "@/Components/Cards";
import { useEffect, useState } from "react";
import { Section1 } from "@/Components/Section1";
import { Section2 } from "@/Components/Section2";
import { LoadMore } from "@/Components/LoadMore";
import { Section3 } from "@/Components/Section3";

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
      <Section1 articles={articles} />
      <Section2 articles={articles} />
      <LoadMore />
      <Section3 />
      <div >
      </div>

    </>
  )
}
