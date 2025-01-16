import Textarea from '@mui/joy/Textarea';
import { Box } from "@mui/material";

type TextAreaFieldProps = {
  value?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onInput:(value: string) => void;
};

export const TextAreaField = (
  {
    value,
    label,
    name,
    onInput,
  }: TextAreaFieldProps) => {
  return (
    <Box
      sx={{ py: 2, display: 'grid', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}
    >
      {label ?
        <label htmlFor={name}>
          {label}
        </label>
        : null
      }
      <Textarea 
        name="Solid" 
        placeholder="Type in here…" 
        variant="plain" 
        value={value} 
        onChange={(event) => onInput(event.target.value)}
      />
    </Box>
  )
};

export default TextAreaField;
