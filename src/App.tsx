import {
    FaArrowDown,
    FaArrowPointer,
    FaArrowRight,
    FaWindows,
    FaApple,
} from "react-icons/fa6";
import Approach from "./components/Approach";
import { platform } from "./platform";

const chapters = [
    { id: "overview", title: "产品简介", subtitle: "Overview" },
    { id: "tutorial", title: "操作演示", subtitle: "Tutorial" },
    { id: "download", title: "安装下载", subtitle: "Download" },
];
const platformName = platform === "windows" ? "Windows" : "Mac OS";

const App = () => (
    <div className="site" id="top" data-platform={platform}>
        <header className="site-header">
            <div className="shell header-inner">
                <a className="brand" href="#top">
                    <span className="brand-mark">
                        <FaArrowPointer aria-hidden="true" />
                    </span>
                    Pointra
                </a>
                <nav aria-label="主导航">
                    {chapters.map(({ id, title }) => (
                        <a key={id} href={`#${id}`}>
                            {title}
                        </a>
                    ))}
                </nav>
                <a className="button small" href="#download">
                    下载 <FaArrowDown aria-hidden="true" />
                </a>
            </div>
        </header>

        <main className="shell">
            <section className="hero" aria-labelledby="hero-title">
                <div>
                    <h1 id="hero-title">Pointra</h1>
                    <p className="hero-subtitle">光标所指 · 翻译即达</p>
                    <p className="intro">
                        一款基于鼠标指针的 {platformName}{" "}
                        查词助手。阅读英文时，把光标移到单词附近，按下快捷键就能查看释义。
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
                        <a className="button" href="#tutorial">
                            查看操作演示 <FaArrowRight aria-hidden="true" />
                        </a>
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

            <section
                className="section"
                id="overview"
                aria-labelledby="overview-title"
            >
                <p className="tag">01 / OVERVIEW</p>
                <h2 id="overview-title">产品简介</h2>
                <div className="overview-grid">
                    <ol className="rows overview-rows">
                        <li className="panel">
                            <span className="number">01</span>
                            <div>
                                <strong>指向单词</strong>
                                <p>把鼠标移到想查的英文单词附近。</p>
                            </div>
                        </li>
                        <li className="panel">
                            <span className="number">02</span>
                            <div>
                                <strong>按下按键</strong>
                                <p>默认按 F2，Pointra 会识别光标附近的单词。</p>
                            </div>
                        </li>
                        <li className="panel">
                            <span className="number">03</span>
                            <div>
                                <strong>查看翻译</strong>
                                <p>
                                    要翻译整段文字，可以先选中文本或者使用框选翻译。
                                </p>
                            </div>
                        </li>
                    </ol>
                    <aside
                        className="panel shortcut-sheet"
                        aria-label="默认快捷键"
                    >
                        <p className="eyebrow">QUICK REFERENCE</p>
                        <h3>默认快捷键</h3>
                        <dl>
                            <div>
                                <dt>光标查词</dt>
                                <dd>
                                    <kbd>F2</kbd>
                                </dd>
                            </div>
                            <div>
                                <dt>选中翻译</dt>
                                <dd>
                                    <kbd>Alt + 1</kbd>
                                </dd>
                            </div>
                            <div>
                                <dt>唤醒搜索</dt>
                                <dd>
                                    <kbd>Alt + 2</kbd>
                                </dd>
                            </div>
                            <div>
                                <dt>框选翻译</dt>
                                <dd>
                                    <kbd>Alt + 3</kbd>
                                </dd>
                            </div>
                        </dl>
                    </aside>
                </div>
            </section>

            <Approach />

            <section
                className="section"
                id="download"
                aria-labelledby="download-title"
            >
                <p className="tag">03 / DOWNLOAD</p>
                <h2 id="download-title">安装下载</h2>
                <div className="panel download-panel">
                    <div>
                        <h3>
                            <FaWindows aria-hidden="true" /> Pointra for{" "}
                            {platformName}
                        </h3>
                        <p>
                            支持 Windows 10 和 Windows 11，需要 WebView2
                            运行时。Windows 11 已内置
                            WebView2。安装或使用遇到问题，可联系 java_s@qq.com。
                        </p>
                    </div>
                    <div className="actions">
                        <a
                            className="button primary"
                            href="https://wwvy.lanzouo.com/b01bvyhuf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            前往下载 <FaArrowDown aria-hidden="true" />
                        </a>
                        <a
                            className="button"
                            href="https://www.yuque.com/java-s/frank/introduction"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            使用手册 <FaArrowRight aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>
        </main>

        <footer className="shell site-footer">
            <a className="brand" href="#top">
                <span className="brand-mark">
                    <FaArrowPointer aria-hidden="true" />
                </span>
                Pointra
            </a>
            <div>
                <a
                    href="https://syjun.vip"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Developed by SYJun
                </a>
                <a
                    href="https://beian.miit.gov.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    渝ICP备2020010176号-5
                </a>
            </div>
        </footer>
    </div>
);

export default App;
