import InstallNotice from "./InstallNotice";
import type { Platform } from "../platform";

const Download = ({ platform }: { platform: Platform }) => (
    <section className="section" id="download" aria-labelledby="download-title">
        <p className="tag">03 / DOWNLOAD</p>
        <h2 id="download-title">下载安装</h2>
        <div className="panel download-panel">
            <InstallNotice platform={platform} />
            <div className="actions">
                <a
                    className="button primary"
                    href="https://wwbty.lanzouv.com/b01bvxjgh"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    立 即 下 载
                </a>
            </div>
        </div>
    </section>
);

export default Download;
