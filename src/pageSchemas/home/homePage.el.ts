import { PageSchema } from '@/components/constructor/page-render/types';
import { COMPANY_NAME } from '@/resources/constants';
import { pricingCardsEl } from "@/resources/pricingPlans";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Διαμορφωτής Κωδικών QR για Κάθε Ανάγκη`,
        description: `Δημιουργήστε λεπτομερείς, προσαρμοσμένους κωδικούς QR αμέσως. Κάθε QR απαιτεί 30 tokens. Γρήγορα, ασφαλή και ευέλικτα για κάθε χρήση.`,
        keywords: ["κωδικός QR", "διαμορφωτής", "γεννήτρια", "tokens", "προσαρμοσμένος", "γρήγορος", "ασφαλής"],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME} Διαμορφωτής QR`,
            description: "Δημιουργήστε προσαρμοσμένους κωδικούς QR για κάθε ανάγκη. Γρήγορα, ευέλικτα και ασφαλή.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "qr-generator",
        },
        {
            type: "hero",
            bgImage: "image1",
            title: "Ο Ταχύτερος Τρόπος Δημιουργίας Κωδικών QR",
            description:
                "Ξεκλειδώστε τη δύναμη της άμεσης δημιουργίας κωδικών QR. Ο διαμορφωτής μας είναι σχεδιασμένος για ταχύτητα, ευελιξία και ασφάλεια. Κάθε κωδικός QR είναι έτοιμος σε δευτερόλεπτα και προσαρμοσμένος στις ανάγκες σας.",
            buttons: [
                { text: "Δοκιμάστε τη Γεννήτρια QR", link: "/get-started", color: "primary" },
                { text: "Δείτε Παραδείγματα", link: "/services", color: "secondary" },
            ],
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            style: { margin: "2rem 0" },
            items: [
                {
                    key: "feature1",
                    block: {
                        type: "text",
                        description:
                            "Δημιουργήστε κωδικούς QR για URL, κείμενο, στοιχεία επικοινωνίας, WiFi, εκδηλώσεις και πολλά άλλα. Προσαρμόστε κάθε QR στις ακριβείς ανάγκες σας.",
                        bullets: [
                            "Υποστήριξη πολλαπλών τύπων δεδομένων",
                            "Εύκολη διαμόρφωση",
                            "Προεπισκόπηση πριν τη λήψη",
                        ],
                        iconName: "edit",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                    },
                },
                {
                    key: "feature2",
                    block: {
                        type: "text",
                        description:
                            "Επιλέξτε χρώματα, προσθέστε λογότυπα και ορίστε επίπεδα διόρθωσης σφαλμάτων για μέγιστη αξιοπιστία και branding.",
                        bullets: [
                            "Προσαρμοσμένα χρώματα και branding",
                            "Ενσωμάτωση λογοτύπου",
                            "Υψηλή διόρθωση σφαλμάτων",
                        ],
                        iconName: "palette",
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                        centerTitle: false,
                        centerDescription: false,
                    },
                },
                {
                    key: "feature3",
                    block: {
                        type: "text",
                        description:
                            "Λάβετε τον κωδικό QR σας αμέσως μετά την πληρωμή. Κατεβάστε σε μορφή PNG, SVG ή PDF για εκτύπωση ή ψηφιακή χρήση.",
                        bullets: ["Χωρίς αναμονή", "Πολλαπλές μορφές", "Έτοιμο για εκτύπωση"],
                        iconName: "time",
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6",
                        centerTitle: false,
                        centerDescription: false,
                    },
                },
                {
                    key: "feature4",
                    block: {
                        type: "text",
                        description:
                            "Τα δεδομένα σας προστατεύονται. Κάθε κωδικός QR είναι μοναδικός και ασφαλής για επαγγελματική ή προσωπική χρήση.",
                        bullets: [
                            "Ασφαλής τεχνολογία",
                            "Ιδιωτικοί και μοναδικοί κωδικοί",
                            "Εμπιστοσύνη από επαγγελματίες",
                        ],
                        iconName: "lock",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: true,
                        centerDescription: false,
                    },
                },
            ],
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: pricingCardsEl,
        },
        {
            type: "faq",
            items: [
                {
                    question: "Τι είναι ο διαμορφωτής κωδικών QR;",
                    answer:
                        "Είναι ένα εργαλείο για τη δημιουργία προσαρμοσμένων κωδικών QR για οποιονδήποτε σκοπό, άμεσα και με ασφάλεια. Μπορείτε να επιλέξετε το περιεχόμενο, το στυλ και τη μορφή.",
                },
                {
                    question: "Πόσο κοστίζει κάθε κωδικός QR;",
                    answer:
                        "Κάθε κωδικός QR απαιτεί 30 tokens. Χωρίς συνδρομές ή κρυφές χρεώσεις. Αγοράστε tokens και χρησιμοποιήστε τα όπως θέλετε.",
                },
                {
                    question: "Πόσο γρήγορα λαμβάνω τον κωδικό QR μου;",
                    answer:
                        "Ο κωδικός QR σας δημιουργείται και παραδίδεται αμέσως μετά την πληρωμή. Κατεβάστε τον στη μορφή που προτιμάτε.",
                },
                {
                    question: "Μπορώ να χρησιμοποιήσω κωδικούς QR για επιχειρήσεις;",
                    answer:
                        "Ναι! Οι κωδικοί QR μας είναι ιδανικοί για επαγγελματικές κάρτες, παρακολούθηση προϊόντων, μάρκετινγκ, εισιτήρια εκδηλώσεων και πολλά άλλα.",
                },
                {
                    question: "Είναι ασφαλή τα δεδομένα μου;",
                    answer:
                        "Απολύτως. Χρησιμοποιούμε ασφαλή τεχνολογία για την προστασία των πληροφοριών σας. Οι κωδικοί QR σας είναι μοναδικοί και ιδιωτικοί.",
                },
                {
                    question: "Ποιες μορφές είναι διαθέσιμες;",
                    answer:
                        "Μπορείτε να κατεβάσετε κωδικούς QR σε PNG, SVG ή PDF, έτοιμους για εκτύπωση ή ψηφιακή χρήση.",
                },
                {
                    question: "Χρειάζομαι τεχνικές γνώσεις;",
                    answer:
                        "Δεν χρειάζονται τεχνικές γνώσεις. Ο διαμορφωτής μας είναι σχεδιασμένος για όλους.",
                },
                {
                    question: "Μπορώ να προσαρμόσω την εμφάνιση του κωδικού QR μου;",
                    answer:
                        "Ναι, μπορείτε να επιλέξετε χρώματα, να προσθέσετε λογότυπα και να ορίσετε επίπεδα διόρθωσης σφαλμάτων για μέγιστη αξιοπιστία.",
                },
            ],
        },
    ],
};

export default schema;
