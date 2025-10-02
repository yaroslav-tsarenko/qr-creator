"use client";

import React, {useState, useRef, useEffect} from "react";
import {Button, Slider, Select, Option, Input, Checkbox} from "@mui/joy";
import {ChromePicker} from "react-color";
import {QRCodeCanvas} from "qrcode.react";
import styles from "./QRGenerator.module.scss";
import {useAlert} from "@/context/AlertContext";
import {useUser} from "@/context/UserContext";
import {useRouter} from "next/navigation";

const fonts = ["Arial", "Roboto", "Courier New", "Times New Roman", "Verdana"];
const errorLevels = ["L", "M", "Q", "H"];
const frames = ["none", "square border", "rounded border", "shadow"];

const socialIcons: Record<string, string> = {
    none: "",
    facebook: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
    instagram: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
    linkedin: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
    twitter: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg",
    tiktok: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
};

const QrConfigurator: React.FC = () => {
    const qrRef = useRef<HTMLCanvasElement | null>(null);
    const [qrValue, setQrValue] = useState("https://example.com");
    const {showAlert} = useAlert();
    const user = useUser();
    const router = useRouter();

    const [fgColor, setFgColor] = useState("#2c3e50");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [eyeColor, setEyeColor] = useState("#000000");
    const [opacity, setOpacity] = useState(1);
    const [size, setSize] = useState(260);
    const [title, setTitle] = useState("Scan Me!");
    const [subtitle, setSubtitle] = useState("");
    const [titleColor, setTitleColor] = useState("#000000");
    const [titleFont, setTitleFont] = useState("Arial");
    const [titleSize, setTitleSize] = useState(22);
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [loadingFormat, setLoadingFormat] = useState<"png" | "jpeg" | null>(null);
    const [logoUrl, setLogoUrl] = useState("");
    const [logoSize, setLogoSize] = useState(40);
    const [logoRound, setLogoRound] = useState(0);
    const [errorLevel, setErrorLevel] = useState<"L" | "M" | "Q" | "H">("M");
    const [frameStyle, setFrameStyle] = useState("none");
    const [roundQR, setRoundQR] = useState(false);
    const [dpi, setDpi] = useState(96);
    const [socialIcon, setSocialIcon] = useState<string>("none");
    const [pickerOpen, setPickerOpen] = useState<string | null>(null);

    useEffect(() => {
        const closePicker = () => setPickerOpen(null);
        window.addEventListener("click", closePicker);
        return () => window.removeEventListener("click", closePicker);
    }, []);




    const handleSquareClick = (name: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setPickerOpen(prev => (prev === name ? null : name));
    };
    const calculateTokens = (): number => {
        let tokens = 30; // base

        if (subtitle) tokens += 5;
        if (titleFont !== "Arial") tokens += 5;
        if (titleSize > 24) tokens += 5;
        if (bold || italic || shadow) tokens += 5;
        if (logoUrl || (socialIcon && socialIcon !== "none")) tokens += 10;
        if (logoRound > 0) tokens += 5;
        if (eyeColor !== "#000000") tokens += 5;
        if (roundQR) tokens += 5;
        if (frameStyle !== "none") tokens += 5;
        if (dpi > 96) tokens += 5;

        return tokens;
    };

    const downloadQR = async (format: "png" | "jpeg") => {
        setLoadingFormat(format);
        if (!user) {
            showAlert("Sign in required", "Please sign in to download codes.", "error");
            router.push("/sign-in");
            return;
        }
        const tokens = calculateTokens();
        try {
            const res = await fetch("/api/qr/create-order-qr", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify({
                    userId: user._id,
                    email: user.email,
                    prompt: qrValue,
                    tokens,
                    response: "QR Download",
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                showAlert("Error", data.message || "Not enough tokens", "danger");
                return;
            }

            const qrCanvas = document.getElementById("qr-gen") as HTMLCanvasElement;
            if (!qrCanvas) return;

            const scale = dpi / 96;
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const textHeight = title ? titleSize + 20 : 0;
            canvas.width = size * scale;
            canvas.height = (size + textHeight + 40) * scale;
            ctx.scale(scale, scale);
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = opacity;
            ctx.drawImage(qrCanvas, 0, textHeight);
            ctx.globalAlpha = 1;

            if (title) {
                ctx.fillStyle = titleColor;
                ctx.font = `${bold ? "bold" : ""} ${italic ? "italic" : ""} ${titleSize}px ${titleFont}`;
                ctx.textAlign = "center";
                if (shadow) {
                    ctx.shadowColor = "rgba(0,0,0,0.3)";
                    ctx.shadowBlur = 4;
                }
                ctx.fillText(title, canvas.width / (2 * scale), titleSize + 4);
            }
            if (subtitle) {
                ctx.fillStyle = titleColor;
                ctx.font = `${titleSize - 6}px ${titleFont}`;
                ctx.fillText(subtitle, canvas.width / (2 * scale), titleSize * 2);
            }

            const link = document.createElement("a");
            link.download = `barcode.${format}`;
            link.href = canvas.toDataURL(`image/${format}`);
            link.click();

            showAlert("Success!", "Code downloaded and tokens spent.", "success");
        } catch (err) {
            showAlert("Error", "Failed to spend tokens", "danger");
        }
        setLoadingFormat(null);
    };

    const iconUrl = socialIcon !== "none" ? socialIcons[socialIcon] : logoUrl;


    return (
        <div className={styles.layout}>
            {/* LEFT */}
            <div className={styles.leftBlock}>
                <div className={styles.section}>
                    <h3>Link (Content)</h3>
                    <Input value={qrValue} onChange={(e) => setQrValue(e.target.value)} />
                </div>

                <div className={styles.section}>
                    <h3>Text</h3>
                    <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Input placeholder="Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                    <label>Font</label>
                    <Select value={titleFont} onChange={(_, v) => setTitleFont(v || "Arial")}>
                        {fonts.map(f => <Option key={f} value={f}>{f}</Option>)}
                    </Select>
                    <label>Text size</label>
                    <Slider value={titleSize} min={10} max={48} onChange={(_, v) => setTitleSize(v as number)} />
                    <Checkbox label="Bold" checked={bold} onChange={(e) => setBold(e.target.checked)} />
                    <Checkbox label="Italic" checked={italic} onChange={(e) => setItalic(e.target.checked)} />
                    <Checkbox label="Shadow" checked={shadow} onChange={(e) => setShadow(e.target.checked)} />
                </div>

                <div className={styles.section}>
                    <h3>Logo / Social Icon</h3>
                    <Input placeholder="Logo URL" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} />
                    <label>or choose a social icon</label>
                    <Select value={socialIcon} onChange={(_, v) => setSocialIcon(v || "none")}>
                        {Object.keys(socialIcons).map(key => (
                            <Option key={key} value={key}>{key}</Option>
                        ))}
                    </Select>
                    <label>Logo size</label>
                    <Slider value={logoSize} min={20} max={100} onChange={(_, v) => setLogoSize(v as number)} />
                    <label>Roundness</label>
                    <Slider value={logoRound} min={0} max={50} onChange={(_, v) => setLogoRound(v as number)} />
                </div>
            </div>

            {/* RIGHT */}
            <div className={styles.rightBlock}>
                <div className={styles.section}>
                    <h3>Colors</h3>
                    <div className={styles.colorRow}>
                        <span>Barcode</span>
                        <div
                            className={styles.colorSquare}
                            style={{backgroundColor: fgColor}}
                            onClick={(e) => handleSquareClick("fg", e)}
                        />
                        {pickerOpen === "fg" && (
                            <div className={styles.pickerPopup} onClick={(e) => e.stopPropagation()}>
                                <ChromePicker color={fgColor} onChange={(c) => setFgColor(c.hex)} />
                            </div>
                        )}
                    </div>

                    <div className={styles.colorRow}>
                        <span>Background</span>
                        <div
                            className={styles.colorSquare}
                            style={{backgroundColor: bgColor}}
                            onClick={(e) => handleSquareClick("bg", e)}
                        />
                        {pickerOpen === "bg" && (
                            <div className={styles.pickerPopup} onClick={(e) => e.stopPropagation()}>
                                <ChromePicker color={bgColor} onChange={(c) => setBgColor(c.hex)} />
                            </div>
                        )}
                    </div>

                    <div className={styles.colorRow}>
                        <span>Eye</span>
                        <div
                            className={styles.colorSquare}
                            style={{backgroundColor: eyeColor}}
                            onClick={(e) => handleSquareClick("eye", e)}
                        />
                        {pickerOpen === "eye" && (
                            <div className={styles.pickerPopup} onClick={(e) => e.stopPropagation()}>
                                <ChromePicker color={eyeColor} onChange={(c) => setEyeColor(c.hex)} />
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>Size & options</h3>
                    <p>Size</p>
                    <Slider value={size} min={150} max={600} onChange={(_, v) => setSize(v as number)} />
                    <p>Opacity</p>
                    <Slider value={opacity} min={0.1} max={1} step={0.05} onChange={(_, v) => setOpacity(v as number)} />
                    <p>Error correction</p>
                    <Select value={errorLevel} onChange={(_, v) => setErrorLevel(v as any)}>
                        {errorLevels.map(level => <Option key={level} value={level}>{level}</Option>)}
                    </Select>
                    <Checkbox label="Round modules" checked={roundQR} onChange={(e) => setRoundQR(e.target.checked)} />
                    <label>Frame style</label>
                    <Select value={frameStyle} onChange={(_, v) => setFrameStyle(v || "none")}>
                        {frames.map(f => <Option key={f} value={f}>{f}</Option>)}
                    </Select>
                </div>

                <div className={styles.section}>
                    <h3>Export</h3>
                    <p>DPI</p>
                    <Select value={dpi} onChange={(_, v) => setDpi(v as number || 96)}>
                        <Option value={96}>96 (screen)</Option>
                        <Option value={300}>300 (print)</Option>
                        <Option value={600}>600 (HD print)</Option>
                    </Select>
                </div>
            </div>

            {/* PREVIEW */}
            <div className={styles.previewBlock}>
                <h3>Preview</h3>
                <div
                    style={{
                        display: "inline-block",
                        opacity: opacity,
                        padding: frameStyle !== "none" ? 10 : 0,
                        borderRadius: frameStyle === "rounded border" ? 16 : 0,
                        border: frameStyle.includes("border") ? "4px solid #000" : "none",
                        boxShadow: frameStyle === "shadow" ? "0 4px 15px rgba(0,0,0,0.3)" : "none"
                    }}
                >
                    <QRCodeCanvas
                        id="qr-gen"
                        ref={qrRef}
                        value={qrValue}
                        size={size}
                        fgColor={fgColor}
                        bgColor={bgColor}
                        level={errorLevel}
                        includeMargin
                        imageSettings={
                            iconUrl
                                ? {
                                    src: iconUrl,
                                    height: logoSize,
                                    width: logoSize,
                                    excavate: true,
                                    crossOrigin: "anonymous",
                                }
                                : undefined
                        }
                        style={{borderRadius: roundQR ? logoRound : 0}}
                    />
                </div>
                {/* Title + Subtitle styled live */}
                {title && (
                    <h4
                        style={{
                            fontFamily: titleFont,
                            fontSize: titleSize,
                            fontWeight: bold ? "bold" : "normal",
                            fontStyle: italic ? "italic" : "normal",
                            color: titleColor,
                            textShadow: shadow ? "1px 1px 2px rgba(0,0,0,0.3)" : "none",
                            textAlign: "center",
                            margin: "8px 0 0",
                        }}
                    >
                        {title}
                    </h4>
                )}
                {subtitle && (
                    <p
                        style={{
                            fontFamily: titleFont,
                            fontSize: titleSize - 6,
                            color: titleColor,
                            textAlign: "center",
                            margin: "2px 0 0",
                        }}
                    >
                        {subtitle}
                    </p>
                )}

                <div className={styles.downloadBtns}>
                    <Button
                        loading={loadingFormat === "png"}
                        onClick={() => downloadQR("png")}
                    >
                        Download PNG – {calculateTokens()} tokens
                    </Button>
                    <Button
                        loading={loadingFormat === "jpeg"}
                        onClick={() => downloadQR("jpeg")}
                    >
                        Download JPG – {calculateTokens()} tokens
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default QrConfigurator;
