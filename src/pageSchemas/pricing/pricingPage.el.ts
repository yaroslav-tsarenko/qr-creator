import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";
import { pricingCardsEl } from "@/resources/pricingPlans";

const pricingSchema: PageSchema = {
    meta: {
        title: `Τιμοκατάλογος — ${COMPANY_NAME}`,
        description:
            `Ανακαλύψτε ευέλικτες, διαφανείς τιμές για το ${COMPANY_NAME}. Δημιουργήστε και προσαρμόστε κωδικούς QR σε προσιτές τιμές — χωρίς συνδρομές, χωρίς κρυφές χρεώσεις.`,
        keywords: [
            `${COMPANY_NAME} τιμές`,
            "τιμοκατάλογος γεννήτριας QR",
            "κόστος προσαρμογής κωδικών QR",
            "προσιτοί κωδικοί QR",
            "επιχειρηματικά πλάνα QR"
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} Τιμοκατάλογος`,
            description: "Προσιτές, ευέλικτες τιμές για τη δημιουργία κωδικών QR.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image10",
            title: "Απλή Τιμολόγηση για Κάθε Ανάγκη",
            description: `Επιλέξτε το ιδανικό πλάνο για προσωπική, επαγγελματική ή επιχειρηματική δημιουργία κωδικών QR. Πληρώνετε μόνο για ό,τι χρησιμοποιείτε — χωρίς επαναλαμβανόμενες χρεώσεις.`,
            buttons: [
                { text: "Ξεκινήστε", link: "/dashboard", color: "primary" },
                { text: "Επικοινωνία Πωλήσεων", link: "/contact-us", color: "secondary" },
            ],
        },
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Γιατί να Επιλέξετε τις Τιμές μας;",
                description:
                    `Κρατάμε τα πράγματα απλά: χωρίς συνδρομές, χωρίς κρυφές χρεώσεις. Είτε χρειάζεστε έναν κωδικό QR είτε χιλιάδες για την επιχείρησή σας, το ${COMPANY_NAME} προσαρμόζεται στις ανάγκες σας.`,
                bullets: [
                    "Χωρίς συνδρομές ή επαναλαμβανόμενες πληρωμές",
                    "Ευελιξία πληρωμής ανά χρήση",
                    "Προσιτό για ιδιώτες και επιχειρήσεις",
                    "Διαθέσιμη μαζική δημιουργία QR"
                ],
                iconName: "qr_code",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: pricingCardsEl,
        },
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Πώς λειτουργεί η τιμολόγηση",
            },
            right: {
                type: "text",
                title: "Πώς Λειτουργεί η Τιμολόγησή μας",
                description:
                    `Πληρώνετε μόνο για τους κωδικούς QR που δημιουργείτε. Τα ανώτερα πλάνα ξεκλειδώνουν περισσότερες δυνατότητες και επιλογές προσαρμογής. Οι κωδικοί QR σας δεν λήγουν ποτέ και μπορείτε να τους κατεβάσετε ανά πάσα στιγμή.`,
                bullets: [
                    "Βασικοί κωδικοί QR σε όλα τα πλάνα",
                    "Προηγμένες δυνατότητες στα πλάνα Pro/Business",
                    "Χωρίς κρυφά κόστη",
                    "Διαφανές μοντέλο πληρωμής ανά χρήση",
                ],
                iconName: "settings",
                iconSize: 40,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Τι Λένε οι Πελάτες μας",
                description:
                    `Χιλιάδες χρήστες εμπιστεύονται το ${COMPANY_NAME} για τη δημιουργία κωδικών QR. Η απλή και προσιτή τιμολόγησή μας λειτουργεί για ελεύθερους επαγγελματίες, ομάδες και επιχειρήσεις.`,
                bullets: [
                    `"Ιδανικό για τους κωδικούς QR του μενού του εστιατορίου μου — προσιτό και εύκολο."`,
                    `"Η ομάδα μάρκετινγκ μας χρησιμοποιεί το ${COMPANY_NAME} για καμπάνιες."`,
                    `"Η καλύτερη γεννήτρια κωδικών QR με πραγματική προσαρμογή."`,
                ],
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: "Λήγουν οι κωδικοί QR;",
                    answer: "Όχι. Αφού δημιουργηθούν και κατεβαστούν, οι κωδικοί QR σας θα λειτουργούν πάντα.",
                },
                {
                    question: "Μπορώ να αναβαθμίσω το πλάνο μου αργότερα;",
                    answer: "Ναι. Μπορείτε να αναβαθμίσετε ανά πάσα στιγμή για περισσότερες δυνατότητες και απεριόριστη δημιουργία QR.",
                },
                {
                    question: "Ποιες μορφές είναι διαθέσιμες;",
                    answer: "Οι κωδικοί QR μπορούν να κατεβαστούν σε PNG, JPG, SVG ή PDF ανάλογα με το πλάνο σας.",
                },
                {
                    question: "Προσφέρετε επιστροφές χρημάτων;",
                    answer: "Οι επιστροφές χρημάτων είναι διαθέσιμες εντός 14 ημερών για αχρησιμοποίητα πλάνα σύμφωνα με την πολιτική μας.",
                },
                {
                    question: "Υπάρχει υποστήριξη;",
                    answer: `Ναι. Παρέχουμε υποστήριξη για όλα τα πλάνα. Στείλτε μας email στο ${COMPANY_EMAIL} για βοήθεια.`,
                },
            ],
        },
    ],
};

export default pricingSchema;
