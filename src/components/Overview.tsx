import type { Platform } from "../platform";

const Overview = ({ platform }: { platform: Platform }) => (
    <section className="section" id="overview" aria-labelledby="overview-title">
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
                            需要翻译整段文字时，可以使用选中翻译或者框选翻译。
                        </p>
                    </div>
                </li>
            </ol>
            <aside className="panel shortcut-sheet" aria-label="快速参考">
                <p className="eyebrow">QUICK REFERENCE</p>
                <h3>快速参考</h3>
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
                            <kbd>
                                {platform === "windows" ? "Alt" : "Cmd"} + 1
                            </kbd>
                        </dd>
                    </div>
                    <div>
                        <dt>唤醒搜索</dt>
                        <dd>
                            <kbd>
                                {platform === "windows" ? "Alt" : "Cmd"} + 2
                            </kbd>
                        </dd>
                    </div>
                    <div>
                        <dt>框选翻译</dt>
                        <dd>
                            <kbd>
                                {platform === "windows" ? "Alt" : "Cmd"} + 3
                            </kbd>
                        </dd>
                    </div>
                </dl>
            </aside>
        </div>
    </section>
);

export default Overview;
