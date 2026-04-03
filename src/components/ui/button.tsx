import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-zinc-900 text-white border border-zinc-900 hover:bg-zinc-700 active:bg-zinc-800',
  secondary: 'bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300',
  ghost:     'bg-transparent text-zinc-700 border border-transparent hover:bg-zinc-100',
  light:     'bg-white text-zinc-900 border border-white/20 hover:bg-zinc-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export function Button({ variant = 'primary', size = 'md', className, children, href, onClick, type }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
