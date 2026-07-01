export function EmptyState(props: { title: string; message: string }) {
  return (
    <section role="status">
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
}

