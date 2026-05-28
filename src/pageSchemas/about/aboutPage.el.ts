import { PageSchema } from '@/components/constructor/page-render/types';
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS
} from '@/resources/constants';
import { pricingCardsEl } from "@/resources/pricingPlans";

const schema: PageSchema = {
    meta: {
        title: `Σχετικά με Εμάς — ${COMPANY_NAME}`,
        description: `Μάθετε για το ${COMPANY_NAME}, την αποστολή μας, τις αξίες μας και την ομάδα πίσω από τον ταχύτερο διαμορφωτή κωδικών QR. Ανακαλύψτε τις υπηρεσίες μας, τις τιμές μας και πώς κάνουμε τη δημιουργία QR εύκολη για όλους.`,
        keywords: ["σχετικά", "εταιρεία", "ομάδα", "αποστολή", "κωδικός QR", "υπηρεσίες", "τιμές"],
        canonical: "/about-us",
        ogImage: {
            title: `Σχετικά με ${COMPANY_NAME}`,
            description: "Γνωρίστε την ομάδα και ανακαλύψτε την αποστολή μας για εύκολη δημιουργία κωδικών QR.",
            bg: "#f4faff",
            color: "#0070f3"
        }
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image1",
            title: `Καλώς Ήρθατε στο ${COMPANY_NAME}`,
            description:
                "Δίνουμε σε όλους τη δυνατότητα να δημιουργούν, να προσαρμόζουν και να χρησιμοποιούν κωδικούς QR με ευκολία. Γρήγορα, ασφαλή και προσιτά για κάθε ανάγκη.",
            buttons: [
                { text: "Ξεκινήστε Τώρα", link: "/get-started", color: "primary" },
                { text: "Τι Κάνουμε", link: "/services", color: "secondary" }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Η Αποστολή μας",
                description: `Στο ${COMPANY_NAME}, η αποστολή μας είναι να κάνουμε τη δημιουργία κωδικών QR προσβάσιμη, αξιόπιστη και προσιτή για όλους. Είτε είστε επιχείρηση, διοργανωτής εκδηλώσεων ή ιδιώτης, σας βοηθάμε να συνδέσετε τον κόσμο με μία μόνο σάρωση.`,
                bullets: [
                    "Άμεση δημιουργία κωδικών QR",
                    "Χωρίς συνδρομές ή κρυφές χρεώσεις",
                    "Προσαρμόσιμο για κάθε χρήση",
                    "Εμπιστοσύνη χιλιάδων παγκοσμίως"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "flag",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Η Αποστολή μας"
            }
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
                        description: "Δεν απαιτούνται τεχνικές γνώσεις. Η πλατφόρμα μας είναι σχεδιασμένη για όλους.",
                        bullets: ["Διαισθητική διεπαφή", "Οδηγίες βήμα προς βήμα", "Άμεση προεπισκόπηση"],
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false
                    }
                },
                {
                    key: "feature2",
                    block: {
                        type: "text",
                        description: "Επιλέξτε χρώματα, προσθέστε λογότυπα και ορίστε διόρθωση σφαλμάτων για το brand σας.",
                        bullets: ["Επιλογές branding", "Ευέλικτες μορφές", "Ενσωμάτωση λογοτύπου"],
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false
                    }
                },
                {
                    key: "feature3",
                    block: {
                        type: "text",
                        description: "Πληρώνετε μόνο για ό,τι χρειάζεστε. Χωρίς συνδρομές, τα tokens δεν λήγουν ποτέ.",
                        bullets: ["Διαφανής τιμολόγηση", "Tokens για κάθε QR", "Χωρίς επαναλαμβανόμενες χρεώσεις"],
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false
                    }
                },
                {
                    key: "feature4",
                    block: {
                        type: "text",
                        description: "Τα δεδομένα σας προστατεύονται. Κάθε κωδικός QR είναι μοναδικός και ασφαλής.",
                        bullets: ["Ασφαλής τεχνολογία", "Ιδιωτικοί κωδικοί", "Εμπιστοσύνη από επαγγελματίες"],
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false
                    }
                }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Η Ομάδα μας"
            },
            right: {
                type: "text",
                title: "Γνωρίστε την Ομάδα μας",
                description:
                    "Η παθιασμένη ομάδα μας συνδυάζει εμπειρογνωμοσύνη στην τεχνολογία, τον σχεδιασμό και την υποστήριξη πελατών για να προσφέρει την καλύτερη εμπειρία κωδικών QR. Πιστεύουμε στην καινοτομία, τη διαφάνεια και στο να σας βοηθήσουμε να πετύχετε.",
                bullets: [
                    "Έμπειροι προγραμματιστές",
                    "Δημιουργικοί σχεδιαστές",
                    "Αφοσιωμένη υποστήριξη",
                    "Παγκόσμιο όραμα"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "group",
                iconSize: 48,
                iconColor: "#28a745",
                iconBg: "#e6ffe6"
            }
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Οι Αξίες μας",
                description:
                    "Είμαστε αφοσιωμένοι στην απλότητα, την ασφάλεια και την ικανοποίηση πελατών. Κάθε δυνατότητα είναι χτισμένη με γνώμονα τις ανάγκες σας.",
                bullets: [
                    "Απλότητα: Εύκολο για όλους",
                    "Ασφάλεια: Τα δεδομένα σας είναι ασφαλή",
                    "Υποστήριξη: Είμαστε εδώ για εσάς",
                    "Καινοτομία: Πάντα βελτιωνόμαστε"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Οι Αξίες μας"
            }
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: pricingCardsEl
        },
        {
            type: "faq",
            items: [
                {
                    question: "Τι υπηρεσίες προσφέρετε;",
                    answer:
                        "Παρέχουμε άμεση δημιουργία κωδικών QR, προσαρμογή και ασφαλείς λήψεις."
                },
                {
                    question: "Πώς ξεκινάω;",
                    answer: "Επισκεφθείτε τη σελίδα Ξεκινήστε Τώρα για να αρχίσετε να δημιουργείτε κωδικούς QR εύκολα."
                },
                {
                    question: "Πού μπορώ να βρω τις τιμές;",
                    answer: "Όλα τα Πλάνα & Τιμές αναφέρονται για πλήρη διαφάνεια."
                },
                {
                    question: "Πώς μπορώ να επικοινωνήσω με την υποστήριξη;",
                    answer: `Επικοινωνήστε μέσω email: ${COMPANY_EMAIL}`
                },
                {
                    question: "Είναι ασφαλή τα δεδομένα μου;",
                    answer:
                        "Απολύτως. Χρησιμοποιούμε ασφαλή τεχνολογία για την προστασία των πληροφοριών σας. Οι κωδικοί QR σας είναι μοναδικοί και ιδιωτικοί."
                },
                {
                    question: "Έχετε πολιτική επιστροφών;",
                    answer: "Ναι, προσφέρουμε σαφή πολιτική επιστροφών για αχρησιμοποίητα tokens."
                }
            ]
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image5",
                    title: "Τι Κάνουμε",
                    description: "Εξερευνήστε όλες τις υπηρεσίες κωδικών QR μας.",
                    buttonLink: "/services",
                    buttonText: "Δείτε Υπηρεσίες"
                },
                {
                    image: "image6",
                    title: "Πλάνα & Τιμές",
                    description: "Βρείτε το καλύτερο πλάνο για τις ανάγκες σας.",
                    buttonLink: "/pricing",
                    buttonText: "Δείτε Τιμές"
                },
                {
                    image: "image7",
                    title: "Ξεκινήστε Τώρα",
                    description: "Ξεκινήστε τη δημιουργία κωδικών QR τώρα.",
                    buttonLink: "/get-started",
                    buttonText: "Ξεκινήστε"
                }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Επικοινωνία & Νομικά",
                description: `Έχετε ερωτήσεις ή χρειάζεστε βοήθεια; Επικοινωνήστε μαζί μας στο ${COMPANY_EMAIL}.
${COMPANY_LEGAL_NAME}
Αριθμός Εταιρείας: ${COMPANY_NUMBER}
Διεύθυνση: ${COMPANY_ADDRESS}`,
                bullets: [
                    "Διαθέσιμη υποστήριξη μέσω email",
                    "Νομικές πληροφορίες στο υποσέλιδο",
                    "Περισσότερες επιλογές επικοινωνίας παρακάτω"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "email",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image8",
                width: "100%",
                height: "400px",
                alt: "Επικοινωνία & Νομικά"
            }
        }
    ]
};

export default schema;
