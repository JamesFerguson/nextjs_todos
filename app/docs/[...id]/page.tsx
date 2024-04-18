type Props = {
  params: { id: string[] | undefined  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const DocsIdPage = ({ params }: Props) => {
  return <div>docs {typeof params.id === "undefined" ? '' : params.id.join(", ")}</div>;
};

export default DocsIdPage;
