import { FaArrowDown } from "react-icons/fa6";

const chapters = [
    { id: "overview", title: "产品简介", subtitle: "Overview" },
    { id: "tutorial", title: "操作演示", subtitle: "Tutorial" },
    { id: "download", title: "下载安装", subtitle: "Download" },
];
const imgSrc = `${import.meta.env.BASE_URL}image/pointra.png`;

const SiteHeader = () => (
    <header className="site-header">
        <div className="shell header-inner">
            <a className="brand" href="#top">
                <img style={{ width: "24px" }} src={imgSrc} alt="Pointra" />
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
);

export default SiteHeader;
