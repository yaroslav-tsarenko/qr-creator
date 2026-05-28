import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Υπηρεσίες Κωδικών QR — ${COMPANY_NAME}`,
        description: `Ανακαλύψτε ολοκληρωμένες υπηρεσίες κωδικών QR με το ${COMPANY_NAME}. Δημιουργήστε, προσαρμόστε και διαχειριστείτε κωδικούς QR με εξειδικευμένη υποστήριξη και δυνατότητες για επιχειρήσεις.`,
        keywords: [
            `${COMPANY_NAME} υπηρεσίες`,
            "γεννήτρια κωδικών QR",
            "προσαρμοσμένοι κωδικοί QR",
            "μαζικοί κωδικοί QR",
            "ασφαλείς κωδικοί QR",
            "πολύγλωσσοι κωδικοί QR",
            "επιχειρηματικές λύσεις QR"
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} Υπηρεσίες QR`,
            description: "Δημιουργήστε και προσαρμόστε κωδικούς QR με ισχυρές δυνατότητες για ιδιώτες και επιχειρήσεις.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image1",
            title: `Καλώς Ήρθατε στο ${COMPANY_NAME}`,
            description: "Η ολοκληρωμένη λύση σας για τη δημιουργία και προσαρμογή κωδικών QR γρήγορα και προσιτά.",
            buttons: [
                { text: "Δημιουργία Κωδικού QR", link: "/dashboard", color: "primary" },
                { text: "Δείτε Τιμές", link: "/pricing", color: "secondary" }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Διαχείριση QR στο Cloud",
                description: "Δημιουργήστε και αποθηκεύστε κωδικούς QR online. Αποκτήστε πρόσβαση στους κωδικούς σας ανά πάσα στιγμή, από οποιαδήποτε συσκευή.",
                bullets: [
                    "Ασφαλής online αποθήκευση",
                    "Λήψη ανά πάσα στιγμή",
                    "Οργανώστε τους κωδικούς σας"
                ],
                iconName: "cloud",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: false,
                centerDescription: false,
                centerBullets: false,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Διαχείριση QR στο cloud",
            }
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    key: "multiLang",
                    block: {
                        type: "text",
                        title: "Υποστήριξη Πολλαπλών Γλωσσών",
                        description: "Δημιουργήστε κωδικούς QR με τοπικό περιεχόμενο σε πολλές γλώσσες.",
                        bullets: [
                            "Επιλογέας γλώσσας",
                            "Τοπικά δεδομένα QR",
                            "Ιδανικό για παγκόσμιες ομάδες"
                        ],
                        iconName: "language",
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
                {
                    key: "security",
                    block: {
                        type: "text",
                        title: "Ασφάλεια & Ιδιωτικότητα",
                        description: "Οι κωδικοί QR και τα δεδομένα σας προστατεύονται με ασφάλεια επιχειρηματικού επιπέδου.",
                        bullets: [
                            "Ασφαλής πρόσβαση",
                            "Κρυπτογράφηση δεδομένων",
                            "Επαληθευμένοι λογαριασμοί"
                        ],
                        iconName: "security",
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
                {
                    key: "favorites",
                    block: {
                        type: "text",
                        title: "Αγαπημένα & Γρήγορη Πρόσβαση",
                        description: "Αποθηκεύστε και αποκτήστε άμεση πρόσβαση στους πιο χρησιμοποιημένους κωδικούς QR σας από τον πίνακα ελέγχου.",
                        bullets: [
                            "Σημειώστε αγαπημένους κωδικούς",
                            "Γρήγορη πρόσβαση στον πίνακα ελέγχου",
                            "Εξατομικευμένη βιβλιοθήκη"
                        ],
                        iconName: "favorite",
                        iconSize: 40,
                        iconColor: "#e91e63",
                        iconBg: "#ffe6f0",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
            ]
        },
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "Επιχειρηματικές Λύσεις",
                description: "Κλιμακώστε τη χρήση κωδικών QR σας με δυνατότητες για επιχειρήσεις και εξατομικευμένη υποστήριξη.",
                bullets: [
                    "Μαζική δημιουργία κωδικών QR",
                    "Προσαρμοσμένο branding",
                    "Αφοσιωμένος υπεύθυνος λογαριασμού"
                ],
                iconName: "business",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: false,
                centerDescription: false,
                centerBullets: false,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Επιχειρηματικές λύσεις QR",
            }
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            items: [
                {
                    key: "support",
                    block: {
                        type: "text",
                        title: "Εξειδικευμένη Υποστήριξη",
                        description: "Η ομάδα μας σας βοηθά με την εγκατάσταση, την προσαρμογή και την ενσωμάτωση στις επιχειρήσεις.",
                        bullets: [
                            "Γρήγοροι χρόνοι απόκρισης",
                            "Τεχνική καθοδήγηση",
                            "Εξατομικευμένη βοήθεια"
                        ],
                        iconName: "help",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
                {
                    key: "settings",
                    block: {
                        type: "text",
                        title: "Εύκολη Προσαρμογή",
                        description: "Ρυθμίστε χρώματα, προσθέστε λογότυπα και ορίστε επιλογές με μια διαισθητική διεπαφή.",
                        bullets: [
                            "Επιλογές χρωμάτων & στυλ",
                            "Ενσωμάτωση λογοτύπου",
                            "Ευέλικτες μορφές εξόδου"
                        ],
                        iconName: "settings",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Σχόλια πελατών",
            },
            right: {
                type: "text",
                title: "Ιστορίες Επιτυχίας Πελατών",
                description: `Χιλιάδες χρήστες εμπιστεύονται το ${COMPANY_NAME} για αξιόπιστη δημιουργία κωδικών QR. Δείτε πώς οι υπηρεσίες μας βοηθούν επιχειρήσεις και ιδιώτες να πετύχουν.`,
                bullets: [
                    `"Δημιούργησα κωδικούς QR με branding για το καφέ μου σε λίγα λεπτά."`,
                    `"Η ομάδα μάρκετινγκ μας αύξησε την αφοσίωση με εξατομικευμένες καμπάνιες QR."`,
                    `"Γρήγορο, αξιόπιστο και προσιτό — το συνιστώ ανεπιφύλακτα."`
                ],
                centerTitle: false,
                centerDescription: false,
                centerBullets: false,
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6",
            }
        },
        {
            type: "faq",
            items: [
                {
                    question: "Πώς δημιουργώ κωδικούς QR;",
                    answer: "Απλώς μεταβείτε στη Γεννήτρια QR, εισαγάγετε τα δεδομένα σας, προσαρμόστε τον σχεδιασμό και κατεβάστε αμέσως.",
                },
                {
                    question: "Είναι ασφαλείς οι κωδικοί QR;",
                    answer: "Ναι. Όλοι οι κωδικοί που δημιουργούνται είναι ιδιωτικοί στον λογαριασμό σας και μπορούν να περιλαμβάνουν ασφαλή URL.",
                },
                {
                    question: "Υποστηρίζετε επιχειρήσεις;",
                    answer: "Απολύτως! Προσφέρουμε μαζική δημιουργία, προσαρμοσμένο branding και επιχειρηματικές δυνατότητες.",
                },
                {
                    question: "Μπορώ να δημιουργήσω πολύγλωσσους κωδικούς QR;",
                    answer: "Ναι, μπορείτε να δημιουργήσετε κωδικούς QR που συνδέονται με τοπικό περιεχόμενο ή χρησιμοποιούν πολύγλωσσο κείμενο.",
                },
                {
                    question: "Μπορώ να αποθηκεύσω αγαπημένους κωδικούς QR;",
                    answer: "Ναι, μπορείτε να σημειώσετε τους κωδικούς QR σας ως αγαπημένους για γρήγορη πρόσβαση στον πίνακα ελέγχου σας.",
                },
            ],
        },
    ],
};

export default schema;
