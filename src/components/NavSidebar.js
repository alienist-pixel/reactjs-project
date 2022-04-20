import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation } from "react-router-dom";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIcon from '@mui/icons-material/Assignment'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import companyLogo from '../images/apollo_global_logo.png';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import React, { useState } from "react";
import "../styles/main.css";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      {/* <div
        onClick={() => {
          console.log(this); 
      setIsSidebarOpen(false)}}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={() => {
            console.log(isSidebarOpen); 
            setIsSidebarOpen(true)
            }}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div> */}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
          <img className="logo" src={companyLogo} alt="BigCo Inc. logo"/>
          </span>
        </div>

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history(itemId);
          }}
          items={[
            {
              title: "Dashboard",
              itemId: "/dashboard",
              // Optional
              elemBefore: () => <AlignVerticalBottomIcon />
            },
            {
              title: "Resources",
              itemId: "/resources",
              elemBefore: () => <PeopleAltIcon />,
              subNav: [
                {
                  title: "Projects",
                  itemId: "/resources/projects",
                  // Optional
                  elemBefore: () => <AutoAwesomeMotionIcon />
                },
                {
                  title: "Members",
                  itemId: "/resources/members",
                  elemBefore: () => <PeopleAltIcon/>
                }
              ]
            },
            {
              title: "Board",
              itemId: "/another",
              elemBefore: () => <AssignmentIcon />,
              subNav: [
                {
                  title: "Teams",
                  itemId: "/another/teams",
                  // Optional
                   elemBefore: () => <AssignmentIcon />
                }
              ]
            }
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () =><PeopleAltIcon />
              }
            ]}
            onSelect={({ itemId }) => {
              history(itemId);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
