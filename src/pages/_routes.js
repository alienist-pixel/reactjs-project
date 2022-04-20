import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from "./settings";
import ProjectsPage from "./projects";
import MembersPage from "./members";
import AboutPage from "./about";
import TeamsPage from "./teams";
import HomePage from "./home";

const RoutesByTab = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resources/members" element={<MembersPage />} />
        <Route path="/resources/projects" element={<ProjectsPage />} />
        <Route path="/resources" element={<AboutPage />} />
        <Route path="/another/teams" element={<TeamsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesByTab;
