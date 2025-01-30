import VanillaJS from "../Pages/Technology/Frontend/VanillaJS/VanillaJS";
import React from "../Pages/Technology/Frontend/React/React";
import Angular from "../Pages/Technology/Frontend/Angular/Angular";
import Vue from "../Pages/Technology/Frontend/Vue/Vue";
import Svelte from "../Pages/Technology/Frontend/Svelte/Svelte";

import PHP from "../Pages/Technology/Backend/PHP/PHP";
import Laravel from "../Pages/Technology/Backend/Laravel/Laravel";
import NodeJS from "../Pages/Technology/Backend/NodeJS/NodeJS";
import Flask from "../Pages/Technology/Backend/Flask/Flask";
import Django from "../Pages/Technology/Backend/Django/Django";

import Redis from "../Pages/Technology/Database/Redis/Redis";
import MongoDB from "../Pages/Technology/Database/MongoDB/MongoDB";
import PostgreSQL from "../Pages/Technology/Database/PostgreSQL/PostgreSQL";
import MySQL from "../Pages/Technology/Database/MySQL/MySQL";

const technologyRoutes = {
  frontendRoutes: [
    {
      name: "Vanilla JS",
      path: "vanilla-js",
      page: VanillaJS,
    },
    {
      name: "React",
      path: "react",
      page: React
    },
    {
      name: "Angular",
      path: "angular",
      page: Angular
    },
    {
      name: "Vue",
      path: "vue",
      page: Vue
    },
    {
      name: "Svelte",
      path: "svelte",
      page: Svelte
    },
  ],

  backendRoutes: [
    {
      name: "PHP",
      path: "php",
      page: Laravel
    },
    {
      name: "Laravel",
      path: "laravel",
      page: PHP
    },
    {
      name: "Node.js",
      path: "nodejs",
      page: NodeJS
    },
    {
      name: "Flask",
      path: "flask",
      page: Flask
    },
    {
      name: "Django",
      path: "django",
      page: Django
    },
  ],

  databaseRoutes: [
    {
      name: "Redis",
      path: "redis",
      page: Redis
    },
    {
      name: "MongoDB",
      path: "mongodb",
      page: MongoDB
    },
    {
      name: "PostgreSQL",
      path: "postgresql",
      page: PostgreSQL
    },
    {
      name: "MySQL",
      path: "mysql",
      page: MySQL
    },
  ],
};

export default technologyRoutes;
