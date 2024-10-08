import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: string;
    className?: string;
}

const Btn: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => (
    <button
        ref={ref}
        {...props}
        className={cn(
            `flex items-center justify-center w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-12 font-media text-base lg:text-lg px-4 rounded text-white transition-opacity duration-300 hover:opacity-80 ${className}`,
            {
                'pointer-events-none bg-gray': props.disabled,
                'bg-red': !props.disabled,
            }
        )}
    />
));

Btn.displayName = 'Btn';
export default Btn;
