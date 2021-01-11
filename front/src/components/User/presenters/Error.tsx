import React from 'react';

interface Props {
    error:string|undefined
}

export const Error: React.FC<Props> = ({error}) => {
    return (
        <p>{error}</p>
    )
}
