const imgSrc = `${import.meta.env.BASE_URL}image/pointra.png`;

const SiteFooter = () => (
    <footer className="shell site-footer">
        <a className="brand" href="#top">
            <img style={{ width: "24px" }} src={imgSrc} alt="Pointra" />
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
);

export default SiteFooter;
