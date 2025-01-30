"use client";

import React, { useEffect, useState } from "react";

import { CiCloudSun } from "react-icons/ci";
import { Modal } from "../Shared/Modal";
import { SearchBar } from "../Shared/SearchBar";
import { Weather } from "./Weather";
import { useQuery } from "@tanstack/react-query";
import { createGetWeatherDataRequest } from "../../api/weather";
import { Spinner } from "../Shared/Spinner";
import Alert from "../Shared/Alert";

export const WeatherButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [location, setLocation] = useState("Bratislava");

  const { data, refetch, isFetching, error } = useQuery({
    queryKey: ["weather"],
    queryFn: createGetWeatherDataRequest({ location }),
    enabled: false,
    retry: 0,
  });
  const [weatherData, setWeatherData] = useState(data);

  useEffect(() => {
    setWeatherData(data);
  }, [data]);

  const searchFunction = (e: any) => {
    if (e.key === "Enter") {
      refetch();
      setLocation("");
    }
  };

  const returnErrorText = (error: string) => {
    if (error === "404") {
      return `${error} - Lokácia sa nenašla. Skús znova prosím`;
    } else {
      return `${error} - Zlý request. Skús znova prosím`;
    }
  };

  return (
    <div>
      <CiCloudSun
        {...{
          className: "w-[30px] h-[30px] flex cursor-pointer",
          onClick: () => setModalOpen(true),
        }}
      />
      <Modal
        {...{
          modalOpen,
          setModalOpen,
          className: "modal-box w-[600px] h-[350px] overflow-none",
          refetch,
        }}
      >
        {error ? (
          <Alert
            {...{
              text: returnErrorText(error.name),
            }}
          />
        ) : null}
        <div {...{ className: "flex justify-center flex-col gap-2" }}>
          <div {...{ className: "flex justify-center " }}>
            <h1 {...{ className: "text-black font-bold" }}>
              Zadaj lokáciu a stlač enter
            </h1>
          </div>
          <div {...{ className: "flex justify-center" }}>
            <SearchBar
              {...{
                placeholder: "Zadaj lokáciu",
                className: "w-[300px]",
                input:
                  "input input-bordered flex items-center gap-2 w-full rounded-3xl bg-base-200",
                setSearch: setLocation,
                onKeyDownCapture: searchFunction,
              }}
            />
          </div>
          {!isFetching ? <Weather {...{ weatherData }} /> : <Spinner />}
        </div>
      </Modal>
    </div>
  );
};
