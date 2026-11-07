import { useState } from "react";
import Approach from "./components/Approach";
import Download from "./components/Download";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { platform as detectedPlatform } from "./platform";
import type { Platform } from "./platform";

const App = () => {
    const [platform, setPlatform] = useState<Platform>(
        detectedPlatform === "macos" ? "macos" : "windows",
    );

    const togglePlatform = () => {
        setPlatform((current) => (current === "windows" ? "macos" : "windows"));
    };

    return (
        <div className="site" id="top" data-platform={platform}>
            <SiteHeader />
            <main className="shell">
                <Hero platform={platform} onTogglePlatform={togglePlatform} />
                <Overview platform={platform} />
                <Approach platform={platform} />
                <Download platform={platform} />
            </main>
            <SiteFooter />
        </div>
    );
};

export default App;
