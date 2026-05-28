import React, { useState } from "react";
import { useUser } from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import styles from "./AuthButtons.module.scss";
import { MdStars } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAlert } from "@/context/AlertContext";
import {useAuthActions} from "@/utils/logoutClient";
import { useI18n } from "@/context/i18nContext";

const authTranslations: Record<string, { buyTokens: string; goToApp: string; logout: string; loggedOut: string; logoutFailed: string; signIn: string; signUp: string }> = {
    en: { buyTokens: "Buy tokens", goToApp: "Go To App", logout: "Logout", loggedOut: "Logged out", logoutFailed: "Logout failed", signIn: "Sign In", signUp: "Sign Up" },
    tr: { buyTokens: "Jeton al", goToApp: "Uygulamaya Git", logout: "Çıkış", loggedOut: "Çıkış yapıldı", logoutFailed: "Çıkış başarısız", signIn: "Giriş Yap", signUp: "Kayıt Ol" },
    el: { buyTokens: "Αγορά tokens", goToApp: "Μετάβαση", logout: "Αποσύνδεση", loggedOut: "Αποσυνδεθήκατε", logoutFailed: "Αποτυχία αποσύνδεσης", signIn: "Σύνδεση", signUp: "Εγγραφή" },
    da: { buyTokens: "Køb tokens", goToApp: "Gå til App", logout: "Log ud", loggedOut: "Logget ud", logoutFailed: "Log ud mislykkedes", signIn: "Log ind", signUp: "Opret konto" },
    hu: { buyTokens: "Token vásárlás", goToApp: "Alkalmazás", logout: "Kijelentkezés", loggedOut: "Kijelentkezve", logoutFailed: "Kijelentkezés sikertelen", signIn: "Bejelentkezés", signUp: "Regisztráció" },
};

const AuthButtons: React.FC = () => {
    const user = useUser();
    const { logout, logoutAll } = useAuthActions();
    const { showAlert } = useAlert();
    const { lang } = useI18n();
    const t = authTranslations[lang] || authTranslations.en;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        const ok = await logout();
        showAlert(ok ? t.loggedOut : t.logoutFailed, "", ok ? "success" : "error");
        handleMenuClose();
    };
    if (user) {
        return (
            <div className={styles.authedUser}>
                <div className={styles.userInfo} onClick={handleAvatarClick}>
                    <Avatar
                        src={user.name}
                        alt={user.name}
                        className={styles.avatar}
                    />
                    <div className={styles.userDetails}>
                        <span className={styles.userName}>{user.name}</span>
                        <div className={styles.userBalance}>
                            <p className={styles.balanceText}>
                                <MdStars className={styles.tokenIcon} />{user.tokens ?? 0}
                            </p>
                            <Link href="/pricing" className={styles.buyLink}>
                                {t.buyTokens}
                            </Link>
                        </div>
                    </div>
                </div>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <Link href="/dashboard" className={styles.menuLink}>
                            {t.goToApp}
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        {t.logout}
                    </MenuItem>
                </Menu>

            </div>
        );
    }

    return (
        <div className={styles.nonAuthedButtons}>
            <Link href="/sign-in">
                <ButtonUI text={t.signIn} shape="default" color="linkHover" hoverColor="linkHover" hoverEffect="none"
                          fullWidth/>
            </Link>
            <Link href="/sign-up">
                <ButtonUI text={t.signUp} shape="default" color="secondary" hoverColor="secondary" hoverEffect="none"
                          fullWidth/>
            </Link>
        </div>
    );
};

export default AuthButtons;