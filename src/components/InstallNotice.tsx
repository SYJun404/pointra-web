import { FaArrowRight } from "react-icons/fa6";
import type { Platform } from "../platform";

const InstallNotice = ({ platform }: { platform: Platform }) => (
    <div className="install-notice">
        <h3>温馨提示</h3>
        {platform === "macos" ? (
            <div className="install-notice-body">
                <p className="install-notice-intro">
                    Pointra 需要获取 Mac OS
                    部分权限，在初次启动时，请在设置中进行授权。
                </p>
                <ul className="permission-list">
                    <li>
                        <strong>屏幕录制</strong>
                        <span>使用截屏捕获显示内容，用于光标取词功能。</span>
                    </li>
                    <li>
                        <strong>辅助功能</strong>
                        <span>监听键盘输入，实现全局快捷键及取词操作。</span>
                    </li>
                </ul>
                <div className="install-warning">
                    <h4>⚠️ macOS 安装与启动提示</h4>
                    <p>
                        浏览器下载的未签名应用，会被系统打上“隔离标签”（quarantine
                        attribute），导致提示文件损坏。可以通过终端移除该标签：
                    </p>
                    <ol className="install-steps">
                        <li>
                            打开 <code>终端</code> ( Terminal ) 应用程序。
                        </li>
                        <li>
                            输入以下命令（注意最后有一个空格）：
                            <pre>
                                <code>{"xattr -cr "}</code>
                            </pre>
                        </li>
                        <li>
                            将你的 Pointra.app 文件直接从 Finder
                            拖拽到终端窗口中，路径会自动填充。最终命令看起来像这样：
                            <pre>
                                <code>xattr -cr /Applications/Pointra.app</code>
                            </pre>
                        </li>
                        <li>
                            按下
                            Enter（回车键）。完成后，再次双击应用即可正常打开。
                        </li>
                    </ol>
                </div>
            </div>
        ) : (
            <div className="install-notice-body">
                <p>
                    Pointra 支持系统 Win10 • Win11，且需要系统支持
                    webview2。Win11 自带可以不予考虑，若你的电脑是
                    Win10，软件无法正常运行，请先安装 Edge 浏览器。
                </p>
                <div className="install-warning">
                    <h4>⚠️ Windows 安装与启动提示</h4>
                    <p>
                        浏览器下载的未签名应用，Windows
                        系统及浏览器可能会误报安全风险。请放心，本软件完全安全，请按照以下步骤正常安装运行：
                    </p>
                    <div className="install-troubleshooting">
                        <h5>1. 浏览器提示“无法安全下载”</h5>
                        <p>
                            当下载结束时，浏览器可能会提示{" "}
                            <em>“无法安全下载”</em> 或 <em>“可能存在危害”</em>：
                        </p>
                        <p className="install-solution">
                            <strong>解决方法</strong>
                            ：鼠标悬停在下载任务上{" "}
                            <FaArrowRight
                                size={12}
                                aria-hidden="true"
                            /> {" "}点击 <strong>三个点 (...)</strong>{" "}
                            <FaArrowRight size={12} aria-hidden="true" /> 选择{" "}
                            <strong>“保留” (Keep)</strong>{" "}
                            <FaArrowRight size={12} aria-hidden="true" /> 点击{" "}
                            <strong>“显示详细信息”</strong>{" "}
                            <FaArrowRight size={12} aria-hidden="true" /> 选择{" "}
                            <strong>“仍然保留”</strong>。
                        </p>
                    </div>
                    <div className="install-troubleshooting">
                        <h5>
                            2. 运行程序时弹出“Windows 已保护你的电脑”蓝色窗口
                        </h5>
                        <p>
                            首次双击打开 <code>.exe</code> 程序时，Windows
                            SmartScreen 可能会弹出蓝色警告：
                        </p>
                        <p className="install-solution">
                            <strong>解决方法</strong>
                            ：点击弹窗第一行文字下方的{" "}
                            <strong>“更多信息” (More info)</strong> <FaArrowRight size={12} aria-hidden="true" />{" "}
                            此时右下角会多出一个按钮，点击{" "}
                            <strong>“仍要运行” (Run anyway)</strong>{" "}
                            即可顺利启动。
                        </p>
                    </div>
                </div>
            </div>
        )}
        <p className="install-contact">
            如果你有任何问题，请发送邮件至{" "}
            <a className="text-link" href="mailto:syjun404@foxmail.com">
                syjun404@foxmail.com
            </a>
        </p>
    </div>
);

export default InstallNotice;
