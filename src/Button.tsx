import React, { ReactNode } from 'react';
import MuiButton from '@mui/material/Button';

export interface Props {
    children: ReactNode;
    variant?: 'text' | 'contained' | 'outlined';
}

export const Button = ({ children, variant = 'contained', ...props }: Props) => {
    return (
        <MuiButton variant={variant} {...props}>
            {children}
        </MuiButton>
    );
};