import React from 'react';

import { ButtonProps } from '@/utils/types';

function Button({ className, label, handleClick }: ButtonProps) {
	return (
		<button onClick={handleClick} className={className}>
			{label}
		</button>
	);
}

export default Button;
