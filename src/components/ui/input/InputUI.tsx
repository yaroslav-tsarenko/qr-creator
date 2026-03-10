import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useField } from "formik";

type InputOption = {
    value: string;
    label: string;
};

type BaseInputProps = TextFieldProps & {
    name: string;
    options?: InputOption[];
};

type FormikInputProps = BaseInputProps & {
    formik?: boolean;
};

const renderOptions = (options?: InputOption[]) =>
    options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
            {option.label}
        </MenuItem>
    ));

const FormikInputField: React.FC<BaseInputProps> = ({ options, ...props }) => {
    const [field, meta] = useField(props.name);

    return (
        <TextField
            {...field}
            {...props}
            error={!!meta.error && meta.touched}
            helperText={meta.touched && meta.error ? meta.error : props.helperText}
        >
            {props.select && renderOptions(options)}
        </TextField>
    );
};

const InputUI: React.FC<FormikInputProps> = ({ formik, options, ...props }) => {
    if (formik && props.name) {
        return <FormikInputField {...props} options={options} />;
    }
    return (
        <TextField {...props}>
            {props.select && renderOptions(options)}
        </TextField>
    );
};

export default InputUI;
