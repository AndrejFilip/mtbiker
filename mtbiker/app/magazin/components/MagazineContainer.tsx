"use client";

import React, { useEffect, useState } from "react";
import { SidePanel } from "./SidePanel";
import { ArticlesContainer } from "./ArticlesContainer";
import { useQuery } from "@tanstack/react-query";
import {
  getMagazineArticles,
  getMagazineArticlesFull,
} from "@/app/api/articles";

import Alert from "@/app/ Components/Shared/Alert";
import { Spinner } from "@/app/ Components/Shared/Spinner";
import { MagazineArticleItemProps } from "@/app/types";

export const MagazineContainer = () => {
  const [selectedItem, setSelectedItem] = useState<string>("ALL");
  const [page, setPage] = useState(1);

  const limit = 6;
  const { data } = useQuery({
    queryKey: ["articles"],
    queryFn: getMagazineArticlesFull(),
    enabled: true,
  });

  const {
    data: data1,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles_paginated"],
    queryFn: getMagazineArticles({ page, limit, tags: selectedItem }),
    enabled: true,
    retry: 1,
  });
  const scrollIntoViewOfArticle = () => {
    document
      .getElementById("article-header")
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  const articles: MagazineArticleItemProps[] = data1;
  const fullArticles: MagazineArticleItemProps[] = data;
  const total: number = data?.length;

  useEffect(() => {
    refetch();
    scrollIntoViewOfArticle();
  }, [page, selectedItem]);

  if (error) {
    return <Alert {...{ text: error?.message }} />;
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div {...{ className: "w-full flex justify-center" }}>
      <div {...{ className: "max-w-screen-2xl flex flex-row gap-5" }}>
        <SidePanel {...{ setSelectedItem, articles: fullArticles }} />
        <ArticlesContainer
          {...{
            articles,
            setPage,
            page,
            isLoading,
            error,
            total,
          }}
        />
      </div>
    </div>
  );
};
