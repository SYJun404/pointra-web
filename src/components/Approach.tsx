import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRotateRight } from "react-icons/fa6";
import type { Platform } from "../platform";

const steps = [
    {
        title: "光标翻译",
        subtitle: "Pointer translation",
        shortcut: "F2",
        description:
            "把光标移到英文单词附近，再按下快捷键。Pointra 会识别距离光标最近的单词并显示翻译。",
    },
    {
        title: "选中翻译",
        subtitle: "Selection translation",
        shortcut: "Alt + 1",
        description:
            "用鼠标选中文字，再按下快捷键，即可查看所选文本的翻译。鼠标移出窗口自动隐藏。",
    },
    {
        title: "输入翻译",
        subtitle: "Input translation",
        shortcut: "Alt + 2",
        description:
            "按下快捷键打开搜索界面。你可以输入进行检索，也可以输入一段文本进行翻译。",
    },
    {
        title: "框选翻译",
        subtitle: "Frame translation",
        shortcut: "Alt + 3",
        description:
            "遇到无法选中的文本时，按下快捷键，Pointra 会拉起系统截屏，读取文本并显示翻译。",
    },
    {
        title: "个性设置",
        subtitle: "Preferences",
        shortcut: "Null",
        description:
            "点击系统托盘中的 Pointra 图标，进入设置界面，即可根据个人使用习惯，自由定制快捷键。",
    },
];

const Approach = ({ platform }: { platform: Platform }) => {
    const [current, setCurrent] = useState(0);
    const videos = useRef<(HTMLVideoElement | null)[]>([]);
    const step = steps[current];
    const stepNumber = current + 1;
    const baseUrl = import.meta.env.BASE_URL;

    useEffect(() => {
        const video = videos.current[current];
        if (!video) return;

        void video.play().catch(() => {});
        return () => {
            video.pause();
            video.currentTime = 0;
        };
    }, [current]);

    const replayVideo = () => {
        const video = videos.current[current];
        if (!video) return;

        video.currentTime = 0;
        void video.play().catch(() => {});
    };

    return (
        <section
            className="section"
            id="tutorial"
            aria-labelledby="tutorial-title"
        >
            <p className="tag">02 / TUTORIAL</p>
            <h2 id="tutorial-title">操作演示</h2>
            <div
                className="tutorial-options"
                role="group"
                aria-label="选择演示"
            >
                {steps.map(({ title }, index) => (
                    <button
                        key={title}
                        type="button"
                        aria-pressed={index === current}
                        onClick={() => setCurrent(index)}
                    >
                        <span>0{index + 1}</span> {title}
                    </button>
                ))}
            </div>
            <div className="panel tutorial-panel">
                <div className="tutorial-copy" aria-live="polite">
                    <p className="eyebrow">
                        STEP 0{stepNumber} / 0{steps.length}
                    </p>
                    <h3>{step.title}</h3>
                    <p className="mono muted">{step.subtitle}</p>
                    <p>{step.description}</p>
                    {step.shortcut && (
                        <kbd>
                            {platform === "macos"
                                ? step.shortcut.replace("Alt", "Cmd")
                                : step.shortcut}
                        </kbd>
                    )}
                </div>
                <figure className="media-frame">
                    <figcaption>
                        <span>DEMO / 0{stepNumber}</span>
                        <button
                            className="button small"
                            type="button"
                            onClick={replayVideo}
                        >
                            <FaRotateRight aria-hidden="true" /> 重新播放
                        </button>
                    </figcaption>
                    {steps.slice(0, -1).map(({ title }, index) => (
                        <video
                            key={title}
                            ref={(video) => {
                                videos.current[index] = video;
                            }}
                            hidden={index !== current}
                            muted
                            playsInline
                            preload="auto"
                            aria-label={`${title}演示`}
                            src={`${baseUrl}video/step${index + 1}.mp4`}
                        />
                    ))}
                    {stepNumber === steps.length && (
                        <img
                            src={`${baseUrl}image/step5.png`}
                            alt="Pointra 快捷键设置界面"
                        />
                    )}
                </figure>
            </div>
            <div className="tutorial-controls">
                <button
                    className="button small"
                    type="button"
                    disabled={current === 0}
                    onClick={() => setCurrent(current - 1)}
                >
                    <FaArrowLeft aria-hidden="true" /> 上一步
                </button>
                <span className="mono muted">
                    0{stepNumber} / 0{steps.length}
                </span>
                <button
                    className="button small"
                    type="button"
                    disabled={stepNumber === steps.length}
                    onClick={() => setCurrent(current + 1)}
                >
                    下一步 <FaArrowRight aria-hidden="true" />
                </button>
            </div>
        </section>
    );
};

export default Approach;
