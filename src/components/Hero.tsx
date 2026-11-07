import {
    FaArrowPointer,
    FaArrowRightArrowLeft,
    FaWindows,
    FaApple,
} from "react-icons/fa6";
import type { Platform } from "../platform";

type HeroProps = {
    platform: Platform;
    onTogglePlatform: () => void;
};

const Hero = ({ platform, onTogglePlatform }: HeroProps) => {
    const platformName = platform === "windows" ? "Windows" : "Mac OS";

    return (
        <section className="hero" aria-labelledby="hero-title">
            <div>
                <h1 id="hero-title">Pointra</h1>
                <p className="hero-subtitle">光标所指 · 翻译即达</p>
                <p className="intro">
                    一款基于鼠标指针的 {platformName}{" "}
                    查词助手。阅读英文时，只需将光标移到生词旁，按下快捷键，释义即刻呈现。
                </p>
                <div className="actions">
                    <a className="button primary" href="#download">
                        {platform === "windows" ? (
                            <FaWindows aria-hidden="true" />
                        ) : (
                            <FaApple aria-hidden="true" />
                        )}
                        下载 {platformName} 版
                    </a>
                    <button
                        className="button"
                        type="button"
                        onClick={onTogglePlatform}
                    >
                        <FaArrowRightArrowLeft aria-hidden="true" />
                        切换到 {platform === "windows" ? "Mac" : "Win"} 平台
                    </button>
                </div>
            </div>

            <figure className="panel hero-figure">
                <figcaption>
                    <span>
                        <a
                            href="https://syjun.vip"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Developed by SYJun
                        </a>
                    </span>
                </figcaption>
                <div className="diagram">
                    <div className="diagram-grid" aria-hidden="true">
                        {Array.from({ length: 45 }, (_, index) => (
                            <i key={index} />
                        ))}
                    </div>
                    <div className="example">
                        <div className="example-word">
                            translate <kbd>F2</kbd>
                        </div>
                        <div className="example-result">
                            <FaArrowPointer aria-hidden="true" />{" "}
                            <span>翻译</span>
                            <small>verb</small>
                        </div>
                    </div>
                </div>
                <div className="figure-note">
                    <span>
                        <span className="dot" /> 光标查词示意
                    </span>
                    <span>POINT → TRANSLATE</span>
                </div>
            </figure>
        </section>
    );
};

export default Hero;
