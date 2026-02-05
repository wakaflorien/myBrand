'use client';

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Project";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

export default function Home() {
    return (
        <SmoothScroll>
            <div className="bg-background min-h-screen">
                <Nav />
                <Hero />
                <Projects />
                <Footer />
            </div>
        </SmoothScroll>
    );
}
