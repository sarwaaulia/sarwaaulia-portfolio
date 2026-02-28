"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        updateTheme(savedTheme);
    }, []);

    const updateTheme = (newTheme: string) => {
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.setAttribute("data-theme", "light");
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        updateTheme(newTheme);
    };

    return (
        <div className="min-h-screen transition-colors duration-500">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <TechStack />
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}