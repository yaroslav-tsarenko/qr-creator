import {AlertColor} from "@mui/material/Alert";
import { isAllowedCountry } from "@/resources/allowedCountries";

export type SignUpValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    dateOfBirth: string;
    address: {
        street: string;
        city: string;
        country: string;
        postalCode: string;
    };
};

type SignUpErrors = Partial<Omit<SignUpValues, "address">> & {
    address?: Partial<SignUpValues["address"]>;
};

export const signUpInitialValues: SignUpValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    address: {
        street: "",
        city: "",
        country: "",
        postalCode: "",
    },
};

export const signUpValidation = (values: typeof signUpInitialValues) => {
    const errors: SignUpErrors = { address: {} };
    if (!values.firstName.trim()) errors.firstName = "Required";
    if (!values.lastName.trim()) errors.lastName = "Required";
    if (!values.email) errors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Invalid email";
    if (!values.password) errors.password = "Required";
    else if (values.password.length < 8) errors.password = "Minimum 8 characters";
    if (!values.phone.trim()) errors.phone = "Required";
    else if (!/^[+\d\s()-]{7,20}$/.test(values.phone)) errors.phone = "Invalid phone number";
    if (!values.dateOfBirth) errors.dateOfBirth = "Required";
    else if (new Date(values.dateOfBirth).getTime() > Date.now()) errors.dateOfBirth = "Invalid date";
    if (!values.address.street.trim()) errors.address.street = "Required";
    if (!values.address.city.trim()) errors.address.city = "Required";
    if (!values.address.country) errors.address.country = "Required";
    else if (!isAllowedCountry(values.address.country)) errors.address.country = "Country is not available";
    if (!values.address.postalCode.trim()) errors.address.postalCode = "Required";

    if (Object.keys(errors.address).length === 0) delete errors.address;
    return errors;
};

export const signUpOnSubmit = async (
    values: typeof signUpInitialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) => {
    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });
        const data: { user?: unknown; message?: string } = await res.json();
        if (res.ok && data?.user) {
            showAlert("Registration successful!", "", "success");
            router.replace("/");
            router.refresh();
        } else {
            showAlert(data?.message || "Registration failed", "", "error");
        }
    } catch (e: unknown) {
        showAlert(e instanceof Error ? e.message : "Network error", "", "error");
    } finally {
        setSubmitting(false);
    }
};
