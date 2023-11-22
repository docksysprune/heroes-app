import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MarvelCharacterSearch from "../../search/components/MarvelCharacterSearch/MarvelCharacterSearch";
import { Navbar } from "../../ui/components/Navbar";
import { DCPage } from "../pages/DCPage";
import { HeroPage } from "../pages/HeroPage";
import { MarvelPage } from "../pages/MarvelPage";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />

          <Route path="search" element={<SearchPage/>}/>
          <Route path="hero" element={<HeroPage/>}/>
          <Route path="marvel-search" element={<MarvelCharacterSearch/>}/>

          <Route path="/" element={<Navigate to="/marvel" />} />
          <Route path="/*" element={<Navigate to="/marvel"/>}/>
        </Routes>
      </div>
    </>
  );
};
