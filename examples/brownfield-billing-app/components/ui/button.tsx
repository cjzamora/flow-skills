export function Button(props: { children: string; variant?: "primary" | "secondary" }) {
  const variant = props.variant || "primary";

  return <button data-variant={variant}>{props.children}</button>;
}

